// create the thoughts
const { Schema, model } = require('mongoose');
// date format
const dateFormat = require('../utils/dateFormat');

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        },
        userName: {
            type: String,
            required: true
        },
        reactions: [reactonSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of reactions on retrieval
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
}
);

// create the Thoughts model using the ThoughtsSchema
const Thoughts = model('Thoughts', ThoughtsSchema);

// export the Thoughts model
module.exports = Thoughts;



