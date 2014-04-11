var express	= require("express");
var rest	= require("./routes/rest"); 
var config 	= require("./config");
var app 	= express();

app.use(config.logger);
app.get('/test', rest.test);

app.listen(3000);
console.log("Server has started.");
