var connection = require("./connection.js");

// use these methods to execute commands: selectAll() insertOne() updateOne()

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        // console.log(result);
        cb(result);
      }); 
    
    },
    insertOne: function(whatToSelect, cb) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      // console.log(queryString);
      connection.query(queryString, [whatToSelect], function(err, result) {
        if (err) throw err;
        cb(result);
      });

    },
    updateOne: function(table, burgerId, cb) {
      var queryString = "UPDATE " + table +" SET devoured = true WHERE id =" + burgerId + ";";
      console.log(queryString);
      connection.query(queryString, function(err, result){
        if (err) throw err;
        cb(result);
      });
    }
};



// Export the ORM object in module.exports

module.exports = orm;