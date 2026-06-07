// express code - frame work on node ( helps building server API end points easily)
// alternatives- hapi,  sails
// ? -> is a query parameter
// node mon is only used in development not in production so we instal as dev dependencies
// npm install --save-dev nodemon
// "start": "node index.js" -> add in pakage json to short cut to run the app/ ease access
// "dev": "nodemon index.js",
// npm i mongodb - install mongo db

// const express = require ("express");
// const { MongoClient } = require('mongodb'); // common js

import express from "express"; //"type": "module",
import { MongoClient } from "mongodb"; //"type": "module",
import dotenv from "dotenv";
import { getMovies, createMovies, getMoviesById } from "./helper.js";
import { moviesRouter } from "./movies.js";
import cors from "cors";

dotenv.config(); // getting all env keys

// console.log(process.env); // prints all object in the console

const app = express();
app.use(express.json());

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

// app.use -> intercept every req
// app.use(express.json()); // every request in the body is parsed as json
// const MONGO_URL = 'mongodb://localhost:27017'; //'mongodb://localhost:27017';
// mongodb+srv://yash:<db_password>@cluster0.oddm5lf.mongodb.net/?appName=Cluster0

const MONGO_URL = process.env.MONGO_URL;
// Hidden the url from git
// mongo cluster url placed to connect Atlas

// const PORT = 9000;
const PORT = process.env.PORT || 9000;

if (!MONGO_URL) {
  // Code Guard added
  console.error("❌ CRITICAL: process.env.MONGO_URL is missing!");
  process.exit(1);
}

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect(); // promise returns
  console.log("MongoDB connected");
  return client;
}

export const client = await createConnection(); // allowed only in type module

// route 1 -> rest endpoints //-> Home Page
app.get("/", (req, res) => {
  res.send("Welcome to Movie App");
});

app.use("/movies", moviesRouter);

app.listen(PORT, () => console.log("The server is started", PORT));

//session 2:12

// 2:22

// 2:15 api endpoint connect FE to BE -- session 8
