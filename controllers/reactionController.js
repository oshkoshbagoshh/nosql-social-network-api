// import the models
const Reactions = require('../models/Reactions');
const Thoughts = require('../models/Thoughts');
const Users = require('../models/Users');

// create the reaction controller
const reactionController = {
    // add a reaction to a thought
    async addReaction(req, res) {
        try {
            const thoughtsData = await Thoughts.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { new: true }
            );
            if (!thoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thoughtsData);
        } catch (err) {
            res.status(400).json(err);
        }
    }
};