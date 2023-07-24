const {Schema, model, Types} = require('mongoose');
// Reaction Schema
const reactionSchema = require('./Reaction');

// Thought Schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            virtuals: true,

    },
    id: false,
}
);

// get total count of reactions on retrieval
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
}
);

const Thought = model('Thought', thoughtSchema);
// export
module.exports = Thought;