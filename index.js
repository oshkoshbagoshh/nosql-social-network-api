// set up all of our variables
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
// set up variable for database connection
const db = require('./config/connection');
// const seedUsers = require('./utils/seed');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);


// connect to the database
db.once('open', async () =>  {
    console.log('Connected to the database.');
    // await seedUsers();
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
}
);
