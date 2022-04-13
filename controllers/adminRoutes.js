const router = require('express').Router();
const path = require('path');

router.get('/login', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/adminlogin.html'));
});

router.get('/dashboard', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/admindashboard.html'));
});

router.get('/admincatalog', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/adminCatalog.html'));
});

router.get('/bookcatalog', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/bookCatalog.html'));
});

router.get('/patroncatalog', async (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/patronCatalog.html'));
});



module.exports = router;