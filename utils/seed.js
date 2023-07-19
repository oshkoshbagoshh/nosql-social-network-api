// set up seed data

//connection
const connection = require('../config/connection');

// import the models
const { Users, Thoughts } = require('../models');
const { userNames, emailAddresses } = require('./data');

// connection.once('open', async () => {
//     console.log('Connected to the database.');

// clear existing data
//TODO: 
connection.once('open', async () => {
    console.log('Connected to the database');
  
    // Clear existing data
    await Thought.deleteMany({});
    await User.deleteMany({});
  
    // Create users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        username: usernames[i],
        email: emails[i],
      });
    }
    await User.insertMany(users);
    console.log('Users seeded successfully');
  
    console.log('Seeding complete!');
    process.exit(0);
  });

// create thoughts
const thoughts = [];
for (let i = 0; i < 100; i++) {
    const thought = await Thoughts.create({ thoughtText: `Thought ${i}`, userName: users[Math.floor(Math.random() * users.length)].userName });
    thoughts.push(thought);
}

// create reactions
for (let i = 0; i < 100; i++) {
    const reaction = await Thoughts.create({ reactionBody: `Reaction ${i}`, userName: users[Math.floor(Math.random() * users.length)].userName });
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
