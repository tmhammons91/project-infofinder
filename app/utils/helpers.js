var axios = require("axios"); 

var helpers = {

getSources: function() {
 return axios.get("/api/sources")
 .then(function(results) {
     console.log("axios results" + Object.keys(results)); 
     return results;
 }); 
}, 

addSource: function(name, url, description, topic) {
    var newSource = { name: name, url: url, description: description, topic: topic }
    return axios.post("api/sources", newSource) 
    .then(function(response) {
        return response.data._id
    }); 
}

}

module.exports = helpers; 
