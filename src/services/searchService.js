const youtubeSearch = require('ytsr');

/* 
 * BUG: 
 * lib de consulta de vídeos não traz descrição e duração pode não vir no vídeos
 * usar outra lib ou fazer outra consulta para pegara descrição dos vídeos
 */

/** 
 * @typedef {{ 
 * title:string, 
 * description:string, 
 * duration:string, 
 * url:string }} videoList
 * 
 */


/**
 * 
 * @param {string} term 
 * @param {number} maxQuantity 
 * @param {string} convertTimeTo 
 * @returns {Array<videoList>}
 */
const find = async (term, maxQuantity=200) => {
    console.info("[searchService] - find",{ term, maxQuantity });
    const { items=[] } = await youtubeSearch(term, { limit: maxQuantity });
    return items.map( item => ({
        title:item.title,
        description:item.description,
        duration: item.duration,
        url:item.url
    }));
}


module.exports = {
    find
}