var express = require('express')
var router = express.Router()


// init recipe list
//var test = require('./test.json')
const fs = require('fs');
//joining path of directory 

function getRecipeList(){
  var recipe_files = [];
  //passsing directoryPath and callback function
  fs.readdir(__dirname + '/data', function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
        recipe_files.push(file);
    });
  });

  return recipe_files;
}




// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})
// define a catch all
router.get("/*", function( req, res ) {
    recipe_files = getRecipeList();

    var p = "";
    recipe_files.forEach( function(item){
      p = p + '<p>' + item + '</p>';
    });
    console.log(p);
    res.send(p);
    //res.send(test.name);

    //res.send("gonna do stuff with " + req)
    // var url = req.url
    // url = url.substr(1,url.length);

    // var recipes = url.split('%20');

    // if (recipes.length === 0) {
    //     res.redirect('/');
    // }
    //res.send(recipes.join(' '));

    //res.send(req.url);
    //res.send(JSON.stringify(req.body, null, 4));
    //res.redirect('/');
})

module.exports = router