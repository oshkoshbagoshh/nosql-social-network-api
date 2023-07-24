// create the reaction model here and export it
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
       reactionId: {
              type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId()
            },
            reactionBody: {
                type: String,
                required: true,
                maxlength: 280
            },
            userName: {
                type: String,
                required: true,
                trim: true
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: createdAtVal => dateFormat(createdAtVal)
            }
        },
        {
            toJSON: {
                getters: true
            },
            id: false
        }
    );

    // export 
    module.exports = ReactionSchema;

    