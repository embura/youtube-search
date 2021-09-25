const youtubeSearch = require('ytsr');
const MAX_QUANTITY = process.env.MAX_QUANTITY || 10;

/** 
 * @typedef {{ 
 * title:string, 
 * description:string, 
 * duration:string, 
 * url:string }} SearchResult
 * 
 */


/**
 * 
 * @param {string} term 
 * @returns {Promise<Array<SearchResult>>}
 */
const find = async (term, maxQuantity=MAX_QUANTITY) => {
    // TODO: retorna resultado sem fazer await
    const { items=[] } = await youtubeSearch(term, { limit: maxQuantity });

    console.log({ items });
    
    return items.map( item => ({
        title:item.title, 
        description:item.description, 
        duration:item.duration, 
        url:item.url
    }));
}


module.exports = {
    find
}