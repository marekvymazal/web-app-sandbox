const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(express.static("public")); // serve up folders to public as static resource
app.use(bodyParser.urlencoded({extended: true}));

// process.env.PORT -- dynamic port number
// or local port 3000
app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running on port 3000");
});
