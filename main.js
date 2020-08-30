const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get('749265842125930577').send('```Botが起動しました!```');
});




client.on('message', async message =>{

    if(message.author.bot){
        return;
    }

    

    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "say"){
        const say_message = args.join(" ");
        message.delete().catch(msg=>{});
        message.channel.send(say_message);
    }


})


client.login(process.env.DISCORD_BOT_TOKEN);
