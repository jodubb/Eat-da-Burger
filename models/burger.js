// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(results){
            // passing in my callback functions to process the results
           
            cb(results);
        });
    },
    insertOne: function(whatToSelect, cb ){
        orm.insertOne(whatToSelect, function(res){
            cb(res);
        });
    },

    updateOne: function(burgerId, cb){
        orm.updateOne("burgers", burgerId, function(res){
            cb(res);
        });
    }
};
















// Export the database functions
module.exports = burger;