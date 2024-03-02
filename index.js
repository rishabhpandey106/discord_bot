require('dotenv/config')
const { Client, GatewayIntentBits } = require('discord.js');
const {OpenAI} = require("openai")
const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent] });

const prefix = "gpt";
const channel = ['1213490855852122236']

const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})

client.on("messageCreate" ,async (message)=>{
    console.log(message.content);

    if(message.author.bot) return;
    
    if (message.content.toLowerCase().startsWith(prefix)) {
        const userMessage = message.content.slice(prefixLength).trim();
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    // name:
                    role: "system",
                    content: "Chat GPT is a friendly content"
                },
                {
                    // name:
                    role: "user",
                    content: userMessage
                }
            ]
        }).catch((error) => console.log("openai error - ", error));
    
        message.reply(response.choices[0].message.content);
    }

    message.reply(`Hello Hola Namaskar ${message.author.username}`)

})

client.on("interactionCreate",(interaction)=>{
    console.log(interaction);
    interaction.reply("PONG !")
})

client.login(process.env.DISCORD_KEY)