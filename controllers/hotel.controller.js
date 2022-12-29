const axios = require("axios");
const { api } = require("../common/const");
const db = require("../model");
const {
  actionCompleteResponse,
  sendActionFailedResponse,
} = require("../common/common");

exports.searchHotel = async (req, res) => {
  try {
    const data = {
      ...req.body,
      IsNearBySearchAllowed: "false",
    };

    const response = await axios.post(`${api.hotelSearchURL}`, data);

    msg = "Hotel Searched Successfully!";

    actionCompleteResponse(res, response.data, msg);
  } catch (err) {
    console.log(err);
    sendActionFailedResponse(res, {}, err.message);
  }
};
