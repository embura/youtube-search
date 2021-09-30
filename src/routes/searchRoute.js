const searchController = require("../controllers/searchController");

/**
 * 
 * @param {import("express").Express} app 
 */
const searchRoute = (app) => {
    
    app.route("/v1/search")
        .post(async (request, response) => {
            const { term="", weeklyTime=[], maxAmountOfVideos=200 } = request.body;
            console.info("[SearchRoute] /v1/search: %j", { term, weeklyTime, maxAmountOfVideos});
            const result = await searchController.find(term, weeklyTime, maxAmountOfVideos);
            console.info("[SearchRoute] /v1/search: %j", {statusCode: result.statusCode, term, weeklyTime, maxAmountOfVideos});
            response.status(result.statusCode);
            response.json(result.data);
        });
}


module.exports = searchRoute;
