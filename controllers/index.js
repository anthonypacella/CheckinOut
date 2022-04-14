const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const adminRoutes = require('./adminRoutes');
const bookRoutes = require('./bookRoutes');
const searchRoutes = require('./searchRoutes');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/admin', adminRoutes);
router.use('/books', bookRoutes);
router.use('/search', searchRoutes);


module.exports = router;
