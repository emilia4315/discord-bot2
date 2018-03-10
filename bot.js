const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === ',about') {
    	message.channel.send('`Weebbot v1.000 now with 0 commands and no features xd`');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('use google hehe');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
