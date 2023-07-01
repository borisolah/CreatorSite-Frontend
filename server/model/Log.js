const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  timestamp: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Log = mongoose.model("Log", logSchema);

module.exports = Log;
