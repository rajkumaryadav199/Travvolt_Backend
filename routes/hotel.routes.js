const controller = require("../controllers/hotel.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //Hotel Search
  app.post("/travvolt/hotel/search", controller.searchHotel);
};
