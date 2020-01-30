import mongoose from "mongoose";

const url = `mongodb://admin:secure@128.199.192.85:2277/admin`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
export let db = mongoose.connection