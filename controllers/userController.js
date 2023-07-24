// set up the user controller
const {User, Thought} = require('../models');

// Get all users 
const userController = {
    async getUsers (req, res) {
        try {
            const users = await User.find()
                .populate({ path: "thoughts", select: "-__v" }) // populate thoughts
                .populate({ path: "friends", select: "-__v" }); // populate friends

            return res.status(200).json(users);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Get a single user by _id and populated thought and friend data

    async getUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .populate({ path: "thoughts", select: "-__v" }) // populate thoughts
                .populate({ path: "friends", select: "-__v" }); // populate friends

                // if the user is not found, send 404
                if (!user) {
                    return res.status(404).json({ message: 'No user found with this id!' });
                }

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            return res.status(200).json(user); // return 200 status if successful
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Update User 
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { new: true },
                { runValidators: true }
            );

            // if the user is not found, send 404
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            // return 200 status if successful
            return res.status(200).json({ message: 'User updated!' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Delete User
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            // if the user is not found, send 404
            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            // remove user's associated thoughts
            await Thought.deleteMany({ _id: { $in: user.thoughts } });

            // return 200 status if successful
            return res.status(200).json({ message: 'User and associated thoughts deleted!' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },


    // Add a friend
    async addFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true },
                { runValidators: true }
            );
            // if the friend is not found, send 404
            if (!friend) {
                return res.status(404).json({ message: 'No friend found with this id!' });
            }

            // return 200 status if successful
            return res.status(200).json({ message: 'Friend added!' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Delete a friend
    async deleteFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate( 
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true },
                { runValidators: true }
            );
            // if the friend is not found, send 404
            if (!friend) {
                return res.status(404).json({ message: 'No friend found with this id!' });
            }
            // return 200 status if successful
            return res.status(200).json({ message: 'Friend deleted!' });

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    }
};

// export the user controller
module.exports = userController;
