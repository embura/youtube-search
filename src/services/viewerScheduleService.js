const moment = require("moment");

/** 
 * @typedef {{ 
 * title:string, 
 * description:string, 
 * duration:string, 
 * url:string }} videoList
 * 
 */

const TIME_ENUM = {
    HOURS: "hours",
    MINUTES: "minutes",
    SECONDS: "seconds",
    MILLISECONDS: "milliseconds",
}

/**
 * convert time to minutes
 * @param {string} stringDuration
 * @param {convertTimeTo} stringDuration default value is minutes
 * @returns {number}
 * @example 
 * normalizeTime("1:33:18", "minutes") output => 93.3
 */
 const normalizeTime = (stringDuration="",convertTimeTo=TIME_ENUM.MINUTES) => {
    const [seconds=0, minutes=0, hours=0, days=0] = stringDuration.split(":").reverse();
    return moment.duration().add({ seconds, minutes, hours, days }).as(convertTimeTo);
}

/**
 * 
 * @param {Array<videoList>} videoList 
 * @param {number} longestVideoTime 
 */
 const getValidVideos = (videoList, longestVideoTime) => {
    return  videoList
        .filter(video => video.duration && normalizeTime(video.duration) < longestVideoTime);
}

/**
 * create schedule for watching videos
 * @param {Array<videoList>} videoList 
 * @param {Array<number>} weeklyTime 
 */
 const createSchedule = (videoList=[], weeklyTimeAvailable=[]) => {
    let indexVideo = 0;
    let indexViewerDay = 0;
    const daysPerWeek = weeklyTimeAvailable.length;
    let day = 1;
    const validVideosList = getValidVideos(videoList, Math.max(...weeklyTimeAvailable));
    /**@type {Map<number,{day:number, videos:Array<string>, dailyTimeAvailable:number,timeLeft:number}> } */
    const schedule = new Map()

    while(indexVideo < validVideosList.length){
        indexViewerDay = indexViewerDay<daysPerWeek?indexViewerDay:0;
        const video = validVideosList[indexVideo];
        const {duration} = video;
        const videoDuration = normalizeTime(duration);
        const dailyTimeAvailable  = weeklyTimeAvailable[indexViewerDay];
        video.durationInMinutes = videoDuration;

        if(schedule.has(day)){
            if(schedule.get(day).timeLeft >= videoDuration){
                schedule.get(day).videos.push(video);
                schedule.get(day).timeLeft -= videoDuration;
                indexVideo++;
            }else{
                indexViewerDay++;
                day++;
            }
        }else{
            if(dailyTimeAvailable >= videoDuration){
                schedule.set(day,{ day, videos:[video], dailyTimeAvailable, timeLeft: dailyTimeAvailable - videoDuration });
                indexVideo++;
            }else{
                schedule.set(day,{ day, videos:[], dailyTimeAvailable, timeLeft: dailyTimeAvailable });
                indexViewerDay++;
                day++;
            }

        }
    }

    return schedule;
}



module.exports = {
    createSchedule,
    normalizeTime,
    getValidVideos
}

