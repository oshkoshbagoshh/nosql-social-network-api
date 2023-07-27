// set up variable for database connection
const { connect, connection } = require('mongoose');

connect("mongodb://localhost:27017/nosql-social-network-api")

module.exports = connection;

//mongodb://localhost:27017