const axios = require('axios');
const cheerio = require('cheerio');

module.exports.queryCharacterTier = async (requested) => {
    console.log(`Receieved a character request for ${requested}`)
    let rankData = await axios.get('https://www.eventhubs.com/tiers/ssbu/').then(async res => {

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
    let characterData = await axios.get('https://www.eventhubs.com/tiers/ssbu/').then(async res => {

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

module.exports.queryCharacterData = async (char) => {

    console.log(`Receieved a character request for ${requested}`)
    let rankData = await axios.get('https://www.eventhubs.com/tiers/ssbu/').then(async res => {

        const $ = cheerio.load(res.data);

        const characterData = []

        $('#contentcontainer > div:nth-child(12) > div > div').each((index, element) => {

            const tds = $(element).find("div");

            console.log(tds.text())

            const character = $(tds[1]).text();

            const rank = $(tds[0]).text();

            const characterObj = {
                character,
                rank
            };

            characterData.push(characterObj)
        });

        let answer = tierList.find(o => o.character === `${requested}`)
        console.log(answer)
        return answer
    })
    


}



// https://discordapp.com/oauth2/authorize?client_id=692494508402802710&scope=bot&permissions=515136