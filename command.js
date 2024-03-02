const { REST, Routes }  = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTIxMzQ5MTYxMzg4NDQ4OTgxOQ.GYiv4H.y-NKM6RER91YE9_JzljuqwncERfTzkGQpcfdU4");
(async()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("1213491613884489819"), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();
