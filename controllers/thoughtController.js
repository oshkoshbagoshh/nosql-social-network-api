// import the models
const {Thoughts, Users} = require('../models');

// create the thoughts controller
module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughtsData = await Thoughts.find({});
            res.json(thoughtsData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // get a single thought by id
    async getThoughtById(req, res) {
        try {
            const thoughtsData = await Thoughts.findOne({ _id: req.params.id });
            if (!thoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' }); // if no thought is found, send 404
                return;
            }
            res.json(thoughtsData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // create a new thought
    async createThought(req, res) {
        try {
            const thoughtsData = await Thoughts.create(req.body);
            const userData = await Users.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughtsData._id } },
                { new: true }
            );
            if (!userData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(thoughtsData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // update a thought by id
    async updateThought(req, res) {
        try {
            const thoughtsData = await Thoughts.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            );
            if (!thoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' }); // if no thought is found, send 404
                return;
            }
            res.json(thoughtsData);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // delete a thought by id
    async deleteThought(req, res) {
        try {
            const thoughtsData = await Thoughts.findOneAndDelete({ _id: req.params.id });
            if (!thoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' }); // if no thought is found, send 404
                return;
            }res.json(thoughtsData);

        } catch (err) {
            res.status(400).json(err);
        }
    },
    // add a reaction to a thought
    async addReaction(req, res) {
        try {
            const thoughtsData = await Thoughts.findOneAndUpdate(
                { _id: req.params.id },
                { $push: { reactions: req.body } },
                { new: true, runValidators: true }
            );
            if (!thoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' }); // if no thought is found, send 404
                return;
            }
            res.json(thoughtsData);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    // remove a reaction from a thought
    async removeReaction(req, res) {
        try {
            const thoughtsData = await Thoughts.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' }); // if no thought is found, send 404
                return;
            }
            res.json(thoughtsData);
        } catch (err) {
            res.status(400).json(err);
        }
    }
};