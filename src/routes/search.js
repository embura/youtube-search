const searchController = require("../controllers/search");

/**
 * 
 * @param {import("express").Express} app 
 */
const searchRoute = (app) => {
    
    app.route("/search")
        .post(async (request, response) => {
            const { term="", weeklyTime=[] } = request.body;            
            const result = await searchController.find(term, weeklyTime);
            response.status(result.statusCode);
            response.json(result.data);
        });
}


module.exports = searchRoute;
