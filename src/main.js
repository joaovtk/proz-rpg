const express = require("express");

const app = express();

app.use(express.static(__dirname+"/static"));


app.get("/", (req, res)  => {
    res.sendFile(__dirname+"/pages/index.html");
});

app.listen(8080, "localhost", () => console.log("http://localhost:8080"));