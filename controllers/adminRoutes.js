const router = require('express').Router();
const path = require('path');

router.get('/login', async (req, res) => {
    try {
        res.render('adminlogin');
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render('admindashboard');
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/admincatalog', async (req, res) => {
    try {
        res.render('admincatalog');
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/bookcatalog', async (req, res) => {
    try {
        res.render('bookcatalog');
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get('/patroncatalog', async (req, res) => {
    try {
        res.render('patroncatalog');
      } catch (err) {
        res.status(500).json(err);
      }
    });



module.exports = router;