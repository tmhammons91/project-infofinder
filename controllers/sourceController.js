/*var Source = require("../models/sources");

var sourceController = {

    index: function (req, res) {
        Source.find({})
            .exec(function (err, doc) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            })

    },
    getSources: function (searchTopic) {
        Source.find({ "topic": searchTopic })
            .exec(function (err, response) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("This is the database response: " + response);
                }
            })
    }
}

module.exports = sourceController; 

*/