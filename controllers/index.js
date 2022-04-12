const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const adminRoutes = require('./adminRoutes');



// router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/admin', adminRoutes);



module.exports = router;
