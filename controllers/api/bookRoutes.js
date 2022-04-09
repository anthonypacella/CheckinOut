const router = require('express').Router();
const { Book } = require('../../models');

//Get all books
router.get('/', async (req, res) => {
  const bookData = await Book.findAll();
  console.log(bookData);
  try {
    const bookData = await Book.findAll();
    console.log(bookData);
    res.status(200).json(bookData);
  } catch (err) {
    console.log("books")
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
    console.log("ISBN");
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
      console.log("Author");
      res.status(500).json(err);
    }
  });

module.exports = router;
