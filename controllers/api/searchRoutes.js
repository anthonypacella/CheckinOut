const router = require('express').Router();
const { Search, Book } = require('../../models');

//post a search
router.post('/', async (req, res) => {
  try {
    const newSearch = await Search.create({
      ...req.body
    });
    const isbn = req.body.isbn;
    res.status(200).json(newSearch).redirect(`../books/${isbn}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
