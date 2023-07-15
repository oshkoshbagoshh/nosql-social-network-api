// set up seed data

//connection
const connection = require('./connection');

// import the models
const { User, Thought } = require('../models');
const { userNames, emailAddresses } = require('./data');

connection.once('open', async () => {
    console.log('Connected to the database.');
});

// clear existing data
await User.deleteMany({});
await Thought.deleteMany({});

// create users
const users = [];
for (let i = 0; i < userNames.length; i++) {
    const user = await User.create({ userName: userNames[i], emailAddress: emailAddresses[i] });
    users.push(user);
};

// create thoughts
const thoughts = [];
for (let i = 0; i < 100; i++) {
    const thought = await Thought.create({ thoughtText: `Thought ${i}`, userName: users[Math.floor(Math.random() * users.length)].userName });
    thoughts.push(thought);
}

// create reactions
for (let i = 0; i < 100; i++) {
    const reaction = await Thought.create({ reactionBody: `Reaction ${i}`, userName: users[Math.floor(Math.random() * users.length)].userName });
    reactions.push(reaction);
}

// add reactions to thoughts
for (let i = 0; i < thoughts.length; i++) {
    for (let j = 0; j < 10; j++) {
        const reaction = reactions[Math.floor(Math.random() * reactions.length)];
        thoughts[i].reactions.push(reaction);
    }
    await thoughts[i].save();
}

// add thoughts to users
for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < 10; j++) {
        const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
        users[i].thoughts.push(thought);
    }
    await users[i].save();
}   
// disconnect
await connection.close();
process.exit(0);

// console log 
console.log('Seed data has been added to the database.');
