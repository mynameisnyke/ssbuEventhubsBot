const axios = require('axios');
const cheerio = require('cheerio');

module.exports.queryCharacter = async (requested) => {
    console.log(`Receieved a character request for ${requested}`)
    let answer = await axios.get('https://www.eventhubs.com/tiers/ssbu/').then(async res => {

        const $ = cheerio.load(res.data);

        const tierList = []

        $('#tiers1 > tbody > tr').each((index, element) => {

            const tds = $(element).find("td");

            const character = $(tds[1]).text();

            const rank = $(tds[0]).text();

            const characterObj = {
                character,
                rank
            };

            tierList.push(characterObj)
        });

        let answer = tierList.find(o => o.character === `${requested}`)
        console.log(answer)
        return answer
    })
    return answer
}



// https://discordapp.com/oauth2/authorize?client_id=692494508402802710&scope=bot&permissions=515136