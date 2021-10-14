require("dotenv").config();
require('./config/mongodb')
console.log("Hello World !")
const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname + "/public"));
app.set("view engine", hbs);
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.listen(process.env.PORT, () => console.log(`Server launched at http://localhost:${process.env.PORT}`));

const mainRouter = require(("./routers/main.js"));
app.use(mainRouter);
