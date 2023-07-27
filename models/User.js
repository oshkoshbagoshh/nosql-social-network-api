const {Schema, model  } = require('mongoose');

// User Schema 
const  userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // use regex to validate correct email format
        match: [/.+@.+\..+/, "must match an email address!"],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// get total count of friends on retrieval
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
}
);
//
const User = model('user', userSchema); // create the User model using the UserSchema


// export
module.exports = User; // export the User model