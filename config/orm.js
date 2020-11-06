var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ??";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      return result;
    });
  },
  insertOne: function(){},
  updateOne: function(){}
};

module.exports = orm;
