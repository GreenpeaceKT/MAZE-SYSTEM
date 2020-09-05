const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.cache.get('749265842125930577').send('```MEIが起動しました!```');
});

client.on('guildMemberAdd', member => {
  client.channels.cache.get('749635026915950612').send('${message.guild.name}に${message.guild.memberCount}が参加しました');
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
