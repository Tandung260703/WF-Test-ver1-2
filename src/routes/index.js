const inventoryRoute = require("./inventoryRoute.js");
const authRoute = require("./authRoute.js");

function route(app) {
  const endPointURL = "/api/v1";

  app.use(endPointURL + "/inventories", inventoryRoute);
  app.use(endPointURL + "/auth", authRoute);
}

module.exports = route;
