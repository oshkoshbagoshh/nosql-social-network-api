// set up controllers in this file to handle user requests
//
// // import the models
const { Users, Thoughts } = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const userData = await Users.find({});
            res.json(userData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // get one user by id
    async getUserById(req, res) {
        try {
            const userData = await Users.findOne({ _id: req.params.id });
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData);

        } catch (err) {
            res.status(400).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const userData = await Users.create(req.body);
            res.json(userData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // update a user by id
    async updateUser(req, res) {
        try {
            const userData = await Users.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true});
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            } res.json(userData); // return updated user unless the user doesn't exist
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // delete a user by id
    async deleteUser(req, res) {
        try {
            const userData = await Users.findOneAndDelete({ _id: req.params.id });
            await Thoughts.deleteMany({ _id: { $in: userData.thoughts } }); // this deletes all thoughts associated with the user
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            } res.json(userData); // return deleted user unless the user doesn't exist
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // add a friend to a user's friend list
    async addFriend(req, res) {
        try {
            const userData = await Users.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { new: true });
                res.json(userData); // return updated user unless the user doesn't exist}
                if (!userData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                } // return updated user unless the user doesn't exist
    
        } catch (err) {
            res.status(400).json(err);
        }
    },

    // remove a friend from a user's friend list
    async removeFriend(req, res) {
        try {
            const userData = await Users.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { new: true });
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(userData); // return updated user unless the user doesn't exist
        }
        catch (err) {
            res.status(400).json(err);
        }
    }
};
