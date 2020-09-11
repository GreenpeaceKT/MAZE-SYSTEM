const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const MAZE = '731348290267906068'
const MEMBERCOUNT = '752067627018485801'


client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);

  client.channels.cache.get('749265842125930577').send('```MEIが起動しました!```');

  const guild = client.guilds.cache.get(MAZE)
   const channel = guild.channels.cache.get(MEMBERCOUNT)
   channel.setName('人数: ' + guild.memberCount)
 
});

client.on('guildMemberAdd', (member, guild) => {
    const channel = member.guild.channels.cache.get("749635026915950612");
    if (!channel) return;
    channel.send(`**${member.user}さんが参加しました！**`);
});

client.on('guildMemberAdd', member => {
   if (member.guild.id === MAZE) {
     const channel = member.guild.channels.cache.get(MEMBERCOUNT)
     channel.setName('人数: ' + member.guild.memberCount)
   }
 })


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

if(command === "ping"){
        message.reply(client.ws.ping)
        const invite = await message.channel.createInvite({ maxAge: 0 })
        message.channel.send(invite.url)
    }

})


client.login(process.env.DISCORD_BOT_TOKEN);
