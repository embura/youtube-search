/**
 * 
 * @param {string} text 
 * @returns {string}
 */
const clearString = (text) => {
    const regex = "!@#$^&%*()+\=-[]/{}|:<>?,.".split("").map(s => `\\${s}`).join("|");
    return text.replace(new RegExp(regex, "gi"), "")
}

/**
 * 
 * @param {string} text 
 * @param {*} map 
 * @returns 
 */
const addWords = (text = "", map = new Map([["", { count:0 }]])) => {

    if( typeof text !== "string"){
        return map;
    }

    return clearString(text)
        .toLowerCase()
        .split(" ").reduce( (acc, cur) => {
            if(acc.has(cur)){
                acc.get(cur).count++;
            }else{
                acc.set(cur, { count: 1 });
            }

            return acc;
    }, map);
}

/**
 * 
 * @param {Array<{title:string description:string}>} videoList 
 * @param {number} quantity 
 * @returns {Array<string>}
 */
const getTopWords = (videoList=[], quantity = 5) => {

    const wordsMap = new Map([["", { count:0 }]]);

    videoList.forEach( video => {
        addWords(video.description, wordsMap);
        addWords(video.title, wordsMap);
    });

    // TODO: verificar para não incluir string vazia
    wordsMap.delete("");

    const wordsMapSorted = [...wordsMap.entries()]
        .sort((a,b) => b[1].count - a[1].count)
        .slice(0, quantity);

    return wordsMapSorted.map( word => word[0]);
}

module.exports = {
    getTopWords,
}