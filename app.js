const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

var recipes = require('./recipes/recipes');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use('/home', express.static("public")); // serve up folders from public as static resource
app.use('/recipes', recipes)

// process.env.PORT -- dynamic port number
// or local port 3000
app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running on port 3000");
});

app.get("/", function(req, res) {
	// print request
	//console.log(req);

	// send response
	res.send("<h1>Test</h1>");
});
app.get("/:page", function(req, res) {

    console.log("accessing ", req.params.page );
});

// app.get("/recipes/:page", function(req, res) {
// 	res.send("<h1>Here is recipe data</h1>" + req);
// });

