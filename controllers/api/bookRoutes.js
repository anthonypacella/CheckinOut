const router = require('express').Router();
const { Book , Search } = require('../../models');

//Get all books
router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll();
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get a book by isbn code
router.get('/:isbn', async (req, res) => {
  try {
    const bookData = await Book.findByPk(req.params.isbn);

    if (!bookData) {
      res.status(400).json({ message: 'No book found.' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//post a search
router.post('/', (req, res) => {
  Search.create(req.body)
    .then((newSearch) => {
      res.json(newSearch);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
