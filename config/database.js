//create database
const mongoose = require("mongoose");

require("dotenv").config();

const dbconnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {})
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Issue in DB connection");
      console.log(error.message);
      process.exit(1);
    });
};

//exports dbconnection

module.exports = dbconnect;
