const controller = require("../controllers/flight.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //Airport Data
  app.get(
    "/travvolt/getSearchAirportData/:key",
    controller.getSearchAirportData
  );
  app.post("/travvolt/airportData", controller.airportData);

  //Token Generator
  app.post("/travvolt/flight/token", controller.tokenGenerator);

  //One Way Search
  app.post("/travvolt/flight/search/oneway", controller.searchOneWay);

  //Return Search
  app.post("/travvolt/flight/search/return", controller.searchReturn);
};
