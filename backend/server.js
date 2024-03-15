// const express = require("express");
import express from "express"
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectToMongoDB.js";

import  authRoutes from "./routes/auth.routes.js"
import  messageRoutes from "./routes/message.routes.js"
import  userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";

// use dotenv for {PORT } -> enviroment variable 
// const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 5000 ;
 
dotenv.config();

app.use(express.json());//to parse incoming req with JSON playloads
app.use(cookieParser());


// diffirent routes ::::::::
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get ('/',  (req, res) => {
   res.send("how are you everyone .") 
});

 

app.listen (PORT, () => {
   //call mongodb fun  
   connectToMongoDB()
   
   console.log( `server running on port  ${PORT}`)  
} ); 








 
