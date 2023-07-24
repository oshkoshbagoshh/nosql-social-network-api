const {User} = require('../models');
const connection = require('../config/connection');


// seed data
const users = [
  {
    username: 'lernantino',
    email: 'lernantino@gmail.com',
    thought: ['crop claws last row valley sign still mood bear horse greatest silk organization increase captain slope steep planned at we interior lay environment over'],
  },
  {
    username: 'ajavadi',
    email: 'ajavadi@gmail.com',
    thought: ['chicken has shelf flower run school natural black brought transportation forty if glad doubt movie string compass we tune spell obtain party dropped that'],
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
    thought: ['mmm Ice Cream so good!'],
  },


];

// connect to server
connection.once('open', async () => {
  // delete all data from the database
  await User.deleteMany({});
  // bulk create the data
  await User.collection.insertMany(users);

  console.table(users); // log the data
  console.log('all done with seeding'); // log that the script is done
  process.exit(0); // exit the script
});

// run the script


