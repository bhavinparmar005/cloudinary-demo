const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  ratingPeople: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const adddata = mongoose.model("data", productSchema);

module.exports = adddata;
