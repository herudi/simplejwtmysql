var mysql      = require('mysql');
const {db} = require('./../config.json'); 
var util = require('util');
var connection = mysql.createConnection({
  host : db.host,
  user : db.user,
  password : db.pass,
  database : db.dbname,
  dateStrings : 'date'
});

connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};

connection.query = util.promisify(connection.query);

module.exports = connection;