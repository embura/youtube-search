const searchController = require("../../controllers/search");

/**
 * 
 * @param {import("express").Express} app 
 */
// const searchRoute = (app) => {
    
//     app.route("/search")
//         .post(async (request, response) => {
//             const { term="", weeklyTime=[] } = request.body;            
//             const result = await searchController.find(term, weeklyTime);
//             response.status(result.statusCode);
//             response.json(result.data);
//         });

//     //app.use("/v1", app.routes);
// }


const searchRoute = (router) => {
    
    router.post("/search", async (request, response) => {
        const { term="", weeklyTime=[] } = request.body;            
        const result = await searchController.find(term, weeklyTime);
        response.status(result.statusCode);
        response.json(result.data);
    });
    
    return router;
}

module.exports = searchRoute;
