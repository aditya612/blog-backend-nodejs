require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT;
const db = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  cluster: process.env.DB_CLUSTER,
};
const uri = `mongodb+srv://${db.user}:${db.pass}@${db.cluster}.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => console.log(err));

app.use(cors());

app.get("/", (req, res) => res.send("Welcome our blog site"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
