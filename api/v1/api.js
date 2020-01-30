import express from "express"
import moment from "moment";
const router = express.Router();

moment.locale('th');

// router.use("/help", require("./helper"));
router.use('/',function (req, res) {res.send('hello')})
module.exports = router;