const router = require('express').Router();
const path = require('path');

router.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/adminlogin.html'));
});

router.get('/dashboard', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/admindashboard.html'));
});

module.exports = router;