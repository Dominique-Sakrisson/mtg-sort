async function getCards(options){
if(options){
   
    const activeQuery = Array.from(Object.keys(options))
    console.log(activeQuery[0]);
    console.log(options[activeQuery[0]]);
    try {
        const res = await fetch(`https://api.magicthegathering.io/v1/cards?contains=imageUrl&${activeQuery[0]}=${options[activeQuery[0]]}`);
        const json = res.json();
        return json;
    } catch (error) {
        console.log(error);
    }
   
   
}
    const res = await fetch('https://api.magicthegathering.io/v1/cards?contains=imageUrl');
    const json = await res.json();
    return json;
}

async function getSets() {
const mtgSetsResponse = await fetch('https://api.magicthegathering.io/v1/sets');
const mtgSetsJson = await mtgSetsResponse.json();
return mtgSetsJson;
}

module.exports = {
    getCards,
    getSets,
}
