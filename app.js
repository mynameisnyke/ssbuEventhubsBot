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
        scraper.queryCharacter(req).then(res => {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Some title')
                .setURL('https://discord.js.org/')
                .setAuthor( res.character, `https://media.eventhubs.com/images/characters/ssbu/${res.character}.png`, 'https://discord.js.org')
                .setDescription(res.character)
                .setThumbnail('`https://media.eventhubs.com/images/characters/ssbu/${res.character}.png`')
                .addFields({
                    name: '**Rank**',
                    value: `${res.rank}`
                }, {
                    name: '\u200B',
                    value: '\u200B'
                })
                .setTimestamp()
                .setFooter('Sourced from https://eventhubs.com', `https://media.eventhubs.com/images/characters/ssbu/${res.character}.png`);

            channel.send(exampleEmbed);
            message.reply(`**${res.character}** is rannked **#${res.rank}**`)
        })
    }
});

client.login(token);