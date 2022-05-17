const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect("mongodb+srv://rajarsi:12345@cluster0.rijx7.mongodb.net/E-commerce?retryWrites=true&w=majority");
};

 