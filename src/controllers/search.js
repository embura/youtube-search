const searchService = require("../services/search");
const validateViewer = require("../services/validateViewer");
const  topRatingWords = require("../services/topRatingWords");

const defaultResponse = (data=[], statusCode = 500) => ({
    data,
    statusCode,
});

/**
 * 
 * @param {string} term 
 * @param {string} weeklyTime 
 * @returns {boolean}
 */
const isValidParams = (term, weeklyTime) => {
    // TODO: implementar validação
    return true;
}

/**
 * 
 * @param {string} term 
 * @param {Array<string>} weeklyTime 
 * @returns {Promise<Array<String>>}
 */
const find = async (term, weeklyTime) => {
    if(!isValidParams(term, weeklyTime)){
        return defaultResponse([], 400);
    }

    const result =  await searchService
        .find(term)
        .catch(error => ({ error }));

    console.debug("[searchController] find",{ result });
    
    if(result.error){
        return defaultResponse();
    }
    
    const tileDescriptions = result.map(videos =>({ title: videos.title,  description: videos.description, }));

    const response = {
        topWord: topRatingWords.getTopWords(tileDescriptions),
        result
    }

    return defaultResponse(response, 200);
}


module.exports = {
    find
}