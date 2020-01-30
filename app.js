import express, { response } from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import config from "config";
import https from "http";
import { db } from "./models/connect_mongo";

db.on("error", console.error.bind(console, 'errrrrrrrrrrrrrrrrrrrrrrrrrrrr'))

const app = express();
let ver = config.get('ver');
const port = process.env.PORT || config.get('port');
const http = https.Server(app);

app.get("/1", async ({ res }) => {
  let collection = db.collection('users')
  let xxx = await collection.find().toArray()
  res.json(xxx)
})

app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./api/v1/api'));

app.get('/', (req, res) => {
  res.status(200).send('hello')
})
// import mongoose from "mongoose";

http.listen(port, () => {
  console.log(`Running version ${ver} on Port: ${port}`);


  // var collection = db.collection('users');
  //   let a = collection.find().then(response=>{
  //     console.log(response);
  //   });


});
