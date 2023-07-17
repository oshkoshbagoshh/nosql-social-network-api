// set up controllers in this file to handle user requests
//
// // import the models
const { Users, Thoughts } = require('../models');

// set up the user controller
module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const userData = await Users.find().populate('thoughts').populate('friends');
            
        }