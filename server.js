// src https://www.youtube.com/watch?v=voDummz1gO0

require("./models/db");

const express = require("express");
const path = require("path");
const exhbs = require("express-handlebars");
const bodyparser = require("body-parser");

const employeeController = require("./controllers/employeeController");

var app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exhbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "views/layout",
  })
);

app.set("view engine", "hbs");

app.listen(3000, () => {
  console.log("Express is running on port 3000");
});

app.use("./Cluster0", employeeController);
