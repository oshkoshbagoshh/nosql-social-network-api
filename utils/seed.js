// set up seed data

//connection
const connection = require('../config/connection');

// import the models
const { Users, Thoughts } = require('../models');
const { userNames, emailAddresses } = require('./data');
console.log(userNames)
// connection.once('open', async () => {
//     console.log('Connected to the database.');

const users = [];
// clear existing data
//TODO: 
connection.once('open', async () => {
    console.log('Connected to the database');
  
    // Clear existing data
    await Thoughts.deleteMany({});
    await Users.deleteMany({});
  
    // Create users
    for (let i = 0; i < 10; i++) {
      users.push({
        userNames: userNames[i],
        emailAddress: emailAddresses[i],
      });
      console.log(users);
    }
    await Users.insertMany(users);
    console.log('Users seeded successfully');
  
    console.log('Seeding complete!');
    process.exit(0);
  });

// create thoughts
const thoughts = [];

var createThought = async function () {

    
    
    for (let i = 0; i < 100; i++) {
        // need to have async first
        // const thought = await Thoughts.create({ thoughtText: `Thought ${i}`, userName: Users[Math.floor(Math.random() * Users.length
        // thoughts.push(thought);
    //   console.log(users[Math.floor(Math.random() * users.length)].username);
    //   console.log(users)

    }
    
}

createThought();
// // create reactions
// for (let i = 0; i < 100; i++) {
//     const reaction = await Thoughts.create({ reactionBody: `Reaction ${i}`, userName: users[Math.floor(Math.random() * users.length)].userName });
//     reactions.push(reaction);
// }

// // add reactions to thoughts
// for (let i = 0; i < thoughts.length; i++) {
//     for (let j = 0; j < 10; j++) {
//         const reaction = reactions[Math.floor(Math.random() * reactions.length)];
//         thoughts[i].reactions.push(reaction);
//     }
//     await thoughts[i].save();
// }

// // add thoughts to users
// for (let i = 0; i < users.length; i++) {
//     for (let j = 0; j < 10; j++) {
//         const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
//         users[i].thoughts.push(thought);
//     }
//     await users[i].save();
// }   
// // disconnect
// await connection.close();
// process.exit(0);

// // console log 
// console.log('Seed data has been added to the database.');
