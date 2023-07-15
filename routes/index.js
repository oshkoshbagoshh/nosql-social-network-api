const router = require('express').Router();
const apiRoutes = require('./apiiRoutes');

router.use('/api', apiRoutes);

module.exports = router;

