const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'やあ') {
    msg.channel.send(`٩( ᐛ )و`);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
