//create server
const express = require("express");
const app = express();

// app.listen(3000 , ()=>{
//     console.log("app is runnig successfully")
// })

//load confing from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000; 
 
//middleware to parse json request body
app.use(express.json());

//imports routed from post api

const  postRoutes = require("./routes/post");

//mount (append , add)  the todo api routes
app.use("api/v1", postRoutes);

//database connect 
 const dbconnect = require("./config/database");
 dbconnect();

 //start server after db connection
 app.listen(PORT , ()=>{
    console.log(`Successfully started at ${PORT}`);
 });

//  //default route
 app.get("/", (req,res) =>{
    res.send(`<h1> This is the Port Page </h1>`)
 });