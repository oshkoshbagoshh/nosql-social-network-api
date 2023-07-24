const { User, Thought } = require('../models');

// Get all thoughts
const thoughtController = {
    async getThoughts(reg, res) {
        try {
            const thoughts = await Thought.find();
            return res.status(200).json(thoughts);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Get single thought 
    async getThought(req, res) {
        try {
            const thought = await Thought.findone({ _id: req.params.thoughtID }); // find one thought by id

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });

            }
            return res.status(200).json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    //Create a single thought 
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);

            const user = await User.findByIdAndUpdate(
                req.body.userId,
                { $addToSet: { thoughts: thought._id } },
                { new: true },
                { runValidators: true }
            );

        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },


    // Update a thought 
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true },
                { runValidators: true }
            );
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },


    // Delete a thought 
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            // if the thought is not found, send 404
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }

            // return 200 status if successful
            return res.status(200).json({ message: 'Thought deleted!' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Add a reaction
    async addReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            )

            // if the thought is not found, send 404
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }

            return res.status(200).json(reaction);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }

    },
    // Delete a reaction 
    async deleteReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            )

            // if the reaction is not found, send 404
            if (!reaction) {
                return res.status(404).json({ message: 'No reaction found with this id!' });
            }

            return res.status(200).json({ message: 'Reaction deleted!' });
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }

    }
};

// export 
module.exports = thoughtController;