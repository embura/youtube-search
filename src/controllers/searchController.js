const searchService = require("../services/searchService");
const { createSchedule } = require("../services/viewerScheduleService");
const  topRatingWords = require("../services/topRatingWordsService");

const defaultResponse = (data="", statusCode = 500) => ({
    data,
    statusCode,
});

/**
 * 
 * @param {string} term 
 * @param {Array<number>} weeklyTime 
 * @returns {boolean}
 */
const isValidParams = (term, weeklyTime) => {
    if(!(Array.isArray(weeklyTime) && weeklyTime.length > 3)){
        return false;
    }

    if( !(typeof term === "string" && term.length > 3) ){
        return false
    }
    return true;
}

/**
 * 
 * @param {string} term 
 * @param {Array<string>} weeklyTime 
 * @returns {Promise<Array<String>>}
 */
const find = async (term, weeklyTime, maxAmountOfVideos = process.env.MAX_QUANTITY || 200) => {
    if(!isValidParams(term, weeklyTime)){
        console.error("[searchController] - Bad Request:  ",{ term, weeklyTime });
        return defaultResponse([], 400);
    }

    const videos =  await searchService
        .find(term, maxAmountOfVideos)
        .catch(error => ({ error }));
    
    if(videos.error){
        console.error("[searchController]: ", videos.error );
        return defaultResponse();
    }

    const schedule = createSchedule(videos, weeklyTime);
    
    const titleDescriptions = videos
        .map(video =>({ title: video.title,  description: video.description }));
    const days = [...schedule.values()];
    const daysTotal = days.length;

    const response = {
        topWord: topRatingWords.getTopWords(titleDescriptions),
        daysTotal,
        days,
    }

    return defaultResponse(response, 200);
}


module.exports = {
    find
}