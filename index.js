// const express = require("express");
import express from 'express';
// import data from './data.json' assert {type:'json'};
const app = express();
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv';
import moviesRouter from './routes/movies.route.js';
dotenv.config();

// const MONGO_URL = 'mongodb://127.0.0.1';

const client = new MongoClient(process.env.MONGO_URL);  //dial a number.
await client.connect(); //call  //previous handshake is happening
console.log("mongo is connected !!!");

// const PORT = 4000;


app.get("/", function (request, response) {
  response.send('Welcome !!!');
});

app.use('/movies',moviesRouter)

app.listen(process.env.PORT||4000, () => console.log(`The server started ✨✨`));

export {client};
