const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'MAZE-SYSTEM' } });
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'やあ') {
    msg.channel.send(`おはようございます`);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);