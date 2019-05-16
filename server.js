// requiring paths
require('dotenv').config()
var express = require("express");
var bodyParser = require("body-parser");

// configure express
var app = express();
app.use(express.static("public"))
var PORT = process.env.PORT || 8080;

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// import routes
var routes = require("./controllers/burger_controller");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/", routes);

app.listen(PORT, function () {
    console.log("EAT DA BURGER is listening on Port: " + PORT);
});

