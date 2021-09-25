/**
 * 
 * @param {string} text 
 * @returns {string}
 */
const clearString = (text) => {
    const nonAlphaNumber = /[^a-z0-9]+/ig
    return text.replace(nonAlphaNumber, "").toLowerCase();
}

const addWords = (text = "", map = new Map([["", { count:0 }]])) => {

    if( typeof text !== "string"){
        return map;
    }

    return text.split(" ").reduce( (acc, cur) => {
        const cleanString = clearString(cur);

        if(acc.has(cleanString)){
            acc.get(cleanString).count++;
        }else{
            acc.set(cleanString, { count: 1 });
        }

        return acc;
    }, map);
}

/**
 * 
 * @param {Array<{title:string description:string}>} listWorld 
 * @param {number} quantity 
 * @returns {Array<string>}
 */
const getTopWords = (listWorld=[], quantity = 5) => {

    const wordsMap = new Map([["", { count:0 }]]);

    listWorld.forEach( video => {
        addWords(video.title, wordsMap);
        addWords(video.description, wordsMap);
    });
    
    wordsMap.delete("");

    const wordsMapSorted = [...wordsMap.entries()]
        .sort((a,b) => b[1].count - a[1].count)
        .slice(0, quantity);

    return wordsMapSorted.map( word => word[0]);
}

module.exports = {
    getTopWords,
}