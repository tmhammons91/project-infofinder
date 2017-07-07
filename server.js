// Modules
var express = require(`express`);
var path = require(`path`);
var bodyParser=require("body-parser"); 

var mongoose = require("mongoose"); 


var Source = require("./models/sources"); 

// Express Port/App Declaration
var PORT = process.env.PORT || 3030;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Middleware
app.use(express.static("./public"));


// MongoDB Configuration configuration
mongoose.connect("mongodb://localhost/infoResources");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Routes======================================================================

app.get("/api/sources", function(req, res) {
  Source.find({})
  .exec(function(err, doc) {
    if (err) {
      console.log(err);  
    } else {
      console.log(res); 
     res.send(doc); 
    }
  });
});  

app.post("/api/sources", function (req, res) {
  var newSource = new Source(req.body); 
  newSource.save(function(err, doc) {
    if (err) {
      console.log(err); 
    }
    else {
      res.send(doc); 
    }
  }); 
}); 

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");  
}); 

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});
