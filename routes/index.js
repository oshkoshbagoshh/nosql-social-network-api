const router = require('express').Router();
// const apiRoutes = require('./api');
const apiRoutes = require('./apiRoutes');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.status(404).send('<h1>Wrong Route!</h1>');
});

module.exports = router;