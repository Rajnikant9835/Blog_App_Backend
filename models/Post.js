const mongoose = require("mongoose");

//define schema
const postSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    maxlength: 50,
  },
  body: {
    type: String,
    required: true,
    maxlength: 200,
  },
  liked: {
    type: String,
    required: true,
    maxlength: 50,
  },
  unliked: {
    type: String,
    required: true,
    maxlength: 50,
  },
});

module.exports = mongoose.model("POST", postSchema);
