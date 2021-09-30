const searchRoute = require("./searchRoute");

/**
 * 
 * @param {import("express").Express} app 
 */
const routes = (app) => {
    searchRoute(app);
}

module.exports = routes;
