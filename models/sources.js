var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SourceSchema = new Schema({
  name: {
    type: String
  },
  url: {
    type: String
  }, 
  description: {
    type: String
  }, 
  topic: {
    type: String
  }, 
    dateAdded: {
    type: Date, 
    default: Date.now
  }
});

var Source = mongoose.model("Source", SourceSchema);
module.exports = Source;