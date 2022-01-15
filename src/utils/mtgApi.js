async function getCards(options){
    if(options){
        const activeQuery = Array.from(Object.keys(options))
      
        const apiUrl = 'https://api.magicthegathering.io/v1/cards?contains=imageUrl'
        try {
            const res = await fetch(`${apiUrl}&${activeQuery[0]}=${options[activeQuery[0]]}&${activeQuery[1]}=${options[activeQuery[1]]}`);
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

function buildStringParams(list){

}

async function getSets() {
const mtgSetsResponse = await fetch('https://api.magicthegathering.io/v1/sets');
const mtgSetsJson = await mtgSetsResponse.json();

return mtgSetsJson.sets;
}

async function getSetByCode(setCode){
    const mtgSetResponse = await fetch(`https://api.magicthegathering.io/v1/sets/${setCode}`)
    const mtgSetJson = await mtgSetResponse.json();
    return mtgSetJson;
}

module.exports = {
    getCards,
    getSets,
}
