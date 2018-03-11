const Discord = require('discord.js');
const client = new Discord.Client();

var Prefix = ',';

client.on('ready', () => {
    console.log('I am ready!');
});

// Commands begin here

client.on('message', message => {
    if (message.content === Prefix + 'about') {
    	message.channel.send('` Weebbot v1.001 - Compiled 11th of March 2018 `');
  	}
});

client.on('message', message => {
	if (message.content === Prefix + 'prefix') {
		message.channel.send('` The prefix is ' + Prefix + '`')
	}
});

// ping command using latency

client.on('message', message => {
	if (message.content === Prefix + 'ping') {
	const m = await message.channel.send("`Testing ping...`");
    m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	}
});



client.login(process.env.BOT_TOKEN);
