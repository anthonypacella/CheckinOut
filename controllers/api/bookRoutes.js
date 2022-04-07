const router = require('express').Router();
const { Book } = require('../../models/Book');

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

router.get('/:author', async (req, res) => {
    try {
      const bookData = await Book.findAll(req.params.author);
  
      if (!bookData) {
        res.status(404).json({ message: 'No book found.' });
        return;
      }
  
      res.status(200).json(bookData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
