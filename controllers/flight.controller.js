const axios = require("axios");
const { tokenGenerator, api } = require("../common/const");
const db = require("../model");
const Airport = db.airport;
const {
  actionCompleteResponse,
  sendActionFailedResponse,
} = require("../common/common");

exports.getSearchAirportData = async (req, res) => {
  try {
    let data = await Airport.find({
      $or: [
        { DestinationCode: { $regex: req.params.key } },
        { AirportName: { $regex: req.params.key } },
        { AirportCode: { $regex: req.params.key } },
        { CityName: { $regex: req.params.key } },
        { CityCode: { $regex: req.params.key } },
        { CountryCode: { $regex: req.params.key } },
      ],
    });
    if (!data) {
      msg = "No Data Found";
      sendActionFailedResponse(res, {}, msg);
    } else {
      msg = "Data Fetched Successfully";
      actionCompleteResponse(res, data, msg);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.airportData = async (req, res) => {
  const airport = new Airport({
    DestinationCode: req.body.DestinationCode,
    AirportName: req.body.AirportName,
    AirportCode: req.body.AirportCode,
    CityName: req.body.CityName,
    CityCode: req.body.CityCode,
    CountryCode: req.body.CountryCode,
  });

  try {
    const response = await airport.save();
    msg = "Data Saved Successfully";

    actionCompleteResponse(res, response, msg);
  } catch (err) {
    console.log(err);
    sendActionFailedResponse(res, {}, err.message);
  }
};

exports.tokenGenerator = async (req, res) => {
  try {
    const data = {
      ClientId: `${tokenGenerator.ClientId}`,
      UserName: `${tokenGenerator.UserName}`,
      Password: `${tokenGenerator.Password}`,
      EndUserIp: `${req.body.EndUserIp}`,
    };

    const response = await axios.post(`${api.tokenURL}`, data);

    msg = "Token Generated";

    actionCompleteResponse(res, response.data, msg);
  } catch (err) {
    console.log(err);
    sendActionFailedResponse(res, {}, err.message);
  }
};

exports.searchOneWay = async (req, res) => {
  try {
    const data = {
      ...req.body,
      JourneyType: "1",
    };

    const response = await axios.post(`${api.flightSearchURL}`, data);

    msg = "Flight Searched Successfully!";

    actionCompleteResponse(res, response.data, msg);
  } catch (err) {
    console.log(err);
    sendActionFailedResponse(res, {}, err.message);
  }
};

exports.searchReturn = async (req, res) => {
  try {
    const data = {
      ...req.body,
      JourneyType: "2",
    };

    const response = await axios.post(`${api.flightSearchURL}`, data);

    msg = "Flight Searched Successfully!";

    actionCompleteResponse(res, response.data, msg);
  } catch (err) {
    console.log(err);
    sendActionFailedResponse(res, {}, err.message);
  }
};
