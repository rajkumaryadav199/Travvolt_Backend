exports.tokenGenerator = {
  ClientId: "ApiIntegrationNew",
  UserName: "SKD.1",
  Password: "Skdtour@4321",
};

exports.api = {
  tokenURL:
    "http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate",
  flightSearchURL:
    "http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search",
  hotelSearchURL:
    "http://api.tektravels.com/BookingEngineService_Hotel/hotelservice.svc/rest/GetHotelResult/",
};

exports.responseFlags = {
  ACTION_COMPLETE: 200,
  ACTION_FAILED: 500,
};

exports.responseMessages = {
  ACTION_COMPLETE: "Successful",
  ACTION_FAILED: "Something went wrong.Please try again",
};
