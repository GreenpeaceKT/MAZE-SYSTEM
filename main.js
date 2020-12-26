const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);

  client.channels.cache.get('749265842125930577').send('```MEIが起動しました!```');

  const guild = client.guilds.cache.get('731348290267906068')
   const channel = guild.channels.cache.get('752067627018485801')
   channel.setName('人数: ' + guild.memberCount)

  client.user.setActivity('made by ぐりんぴーす#8164', {
        type: 'STREAMING'})
})

client.on('guildMemberAdd', (member, guild) => {
    const channel = member.guild.channels.cache.get("749635026915950612");
    if (!channel) return;
    channel.send(`**${member.user}さんが参加しました！**`);
});

client.on('guildMemberAdd', member => {
   if (member.guild.id === '731348290267906068') {
     const channel = member.guild.channels.cache.get('752067627018485801')
     channel.setName('人数: ' + member.guild.memberCount)
   }
 })


client.on('message', async message =>{

    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.author.bot){
        return;
    }
    


if(command === "say"){
        const say_message = args.join(" ");
        message.delete().catch(msg=>{});
        message.channel.send(say_message);
    }

if(command === "addrole" && !message.member.roles.cache.has('742228974469382236')){
        message.member.roles.add('742228974469382236');
        message.reply('あなたは認証されました!');
    }

if(command === "rand"){
        var randoma = Math.floor( Math.random() * 4 )+ 1;
        var randomb = Math.floor( Math.random() * 7 )+ 1;
        message.chanel.send(randoma"-"randomb)
    }


});


client.login(process.env.DISCORD_BOT_TOKEN);
