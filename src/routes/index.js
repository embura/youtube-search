const searchRouteV1 = require("./v1/search");

/**
 * express.RouterOptions
 * Creates an Express application.
 * @param {RouterOptions} app 
 */
const routes = (router) => {
    //searchRouteV1(app);
    
    router.use(function timeLog (req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })

    searchRouteV1(router);
}

module.exports = routes;
