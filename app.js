import express from "express";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import config from "config";
import https from "http";

const app = express();
let ver = config.get('ver');
const port = process.env.PORT || config.get('port');

const http = https.Server(app);

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1', require('./api/v1/api'));

app.get('/',(req,res)=>{
  res.send('hello')
})

http.listen(port, () => {
  console.log(`Running version ${ver} on Port: ${port}`);
});
