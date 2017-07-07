var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SourceSchema = new Schema({
  name: {
    
  } ,
  url: {

  }, 
  description: {
    type: String
  }, 
  topic: {
    type: String
  }
});

var Source = mongoose.model("Source", SourceSchema);
module.exports = Source;