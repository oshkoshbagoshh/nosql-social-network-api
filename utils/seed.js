const { User } = require('../models');
const connection = require('../config/connection');


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

// connect to server
connection.once('open', async () => {
  // delete all data from the database
  await User.deleteMany({})
  // bulk create users 
  await User.collection.insertMany(users);

  // log the data
  console.table(users); // log the data
  console.log('all done with seeding'); // log that the script is done
  process.exit(0); // exit the script
});


// run the script


