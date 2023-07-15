// set up the connections here and export them
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

module.exports = mongoose.connection;
