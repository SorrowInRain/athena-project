const { model, Schema } = require("mongoose");

module.exports = model(
  "UserLevel",
  new Schema({
    UserId: String,
    Experience: {
      type: Number,
      default: 0,
    },
    Level: {
      type: Number,
      default: 0,
    },
    Coin: {
      type: Number,
      default: 0,
    },
    PPMeasure: {
      type: Number,
      default: 0,
    },
  })
);