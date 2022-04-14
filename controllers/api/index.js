const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const searchRoutes = require('./searchRoutes');
const adminRoutes = require('./adminRoutes');
const patronRoutes = require('./patronRoutes')

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/search', searchRoutes);
router.use('/admin', adminRoutes);
router.use('/patron', patronRoutes);

module.exports = router;
