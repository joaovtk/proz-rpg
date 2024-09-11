const express =require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", __dirname+"/views");

app.use(express.static(__dirname+"/static"));

app.get("/", (req, res) => {
    res.render("index", {layout: false});
});

app.listen(8080);