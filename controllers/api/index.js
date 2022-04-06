const router = require('express').Router();
const userRoutes = require('./userRoutes');
const resultRoutes = require('./resultRoutes');

router.use('/users', userRoutes);
router.use('/results', resultRoutes);

module.exports = router;
