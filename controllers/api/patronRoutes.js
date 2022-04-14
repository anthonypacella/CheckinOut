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

router.delete('/:rowid', async (req, res) => {
    try {
        const bookData = await Patron.destroy({
            where: {
                id: req.params.rowid
            }
        });
        res.status(200).json(bookData);
      } catch (err) {
        res.status(500).json(err);
      }
  });

  module.exports = router;