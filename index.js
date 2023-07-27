/*
 * @Author: Someone 
 * @Email: someone@example.com
 * @Date: 2023-07-27 08:22:01 
 * @Last Modified by: Someone
 * @Last Modified time: 2023-07-27 09:01:33
 * @Description: index js file
 */

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const cwd = process.cwd();// current working directory


const PORT = process.env.PORT || 3001; // process.env.PORT 
const app = express();

const activity = cwd.includes("01-Activities")
    ? cwd.split("01-Activities/")[1]
    : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // console.log(`Activity: ${activity}`);
        // console.log(`cwd: ${cwd}`);
    });
}

);
