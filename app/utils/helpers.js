var axios = require("axios"); 

var helpers = {

getSources: function() {
 return axios.get("/api/sources")
 .then(function(results) {
     console.log("axios results" + results); 
     return results;
 }); 
}


}

module.exports = helpers; 
