const router = require('express').Router();
const Patron = require('../../models/Patron.js');

router.get('/', async (req, res) => {
    try {
      const patronData = await Patron.findAll();
      res.status(200).json(patronData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;