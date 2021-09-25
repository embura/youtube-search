const searchRoute = require("./search");

/**
 * 
 * @param {import("express").Express} app 
 */
const routes = (app) => {
    searchRoute(app);
}

module.exports = routes;
