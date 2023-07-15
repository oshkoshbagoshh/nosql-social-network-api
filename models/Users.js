// import the models
const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
},
emailAddress: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
},
thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'thoughts'
    }
],
friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
}
);

const User = model('users', UserSchema);

// export the User model
module.exports = User;

