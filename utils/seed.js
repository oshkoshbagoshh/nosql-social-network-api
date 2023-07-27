const { User } = require('../models');
const connection = require('../config/connection');
const { Thought } = require('../models');


// seed data
const users = [
  {
    username: 'lernantino',
    email: 'lernantino@gmail.com',
    thought: ['this is a test thought', 'this is another test thought'],
  },
  {
    username: 'ajavadi',
    email: 'ajavadi@gmail.com',
    thought: [],
  },
  {
    username: 'Mike123',
    email: 'Mike123@gmail.com',
    thought: ['society of the spectacle'],
  },
  {
    username: 'John123',
    email: 'John123@gmail.com',
    thought: ['the revolution will not be televised'],
  },
  {
    username: 'Jane123',
    email: 'Jane123@gmail.com',
    thought: [' I think therefore I am'],

  },
  {
    username: 'Alanwat123',
    email: 'AlanWatt123@gmail.com',
    thought: ['Reclaimation of your brain is worth moret than cash or fame.']
  },

];



// seed data for thoughts
// const { Thought } = require('../models');
const thoughts = [
    
    {
      thoughtText: 'this is a test thought',
      username: 'lernantino',
      reactions: ['this is a test reaction', 'this is another test reaction'],
    },
    {
      thoughtText: 'this is another test thought',
      username: 'ajavadi',
      reactions: [],
    }
  ];



// connect to server
connection.once('open', async () => {
  // delete all data from the database
  await User.deleteMany({})
  // bulk create users 
  await User.collection.insertMany(users);
  
  
  // delete thoughts 
  await Thought.deleteMany({})
  //bulk create thoughts
  await Thought.collection.insertMany(thoughts);
  // log the data
  console.table(users); // log the data
  console.table(thoughts); // log the data
  console.log('all done with seeding'); // log that the script is done
  process.exit(0); // exit the script
});