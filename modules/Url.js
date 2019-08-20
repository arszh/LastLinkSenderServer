const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("urls", UrlSchema);
