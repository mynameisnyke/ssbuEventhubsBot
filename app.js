const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.discordToken
const scraper = require('./scraper')

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.startsWith('!')) {
        req = message.content.substr(1)
        scraper.queryCharacter(req).then(res =>{
            message.reply(`**${res.character}** is rannked **#${res.rank}**`)
        })
    }
});

client.login(token);