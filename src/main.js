const express = require("express");
const sqlite = require("sqlite");
const app = express();
const body = require("body-parser");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");

app.use(express.static(__dirname+"/static"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");


app.get("/", (req, res)  => {
    res.render("index", {layout: false});
});

app.get("/game", (req, res) => {

    res.render("game", {layout: false, body:});
});

app.listen(8080, "localhost", () => console.log("http://localhost:8080"));