const router = require('express').Router();
const { Book } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//Get all books
router.get('/', async (req, res) => {
  try {
    console.log('req', req);
    console.log('req.query', req.query);
    const { isbn, author, subject, title } = req.query;

    const where = {};
    if (isbn) {
      where.isbn = isbn;
    }
    if (author) {
      where.author = author;
    }
    if (subject) {
      where.subject = subject;
    }
    if (title) {
      where.title = title;
    }

    const bookData = await Book.findAll({
        where: where,
    })


    const books = bookData.map((book) => book.get({ plain: true }));
    res.render('book', {
      books: books
      // ,
      // logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/recommendations', async (req, res) => {
  try {
    console.log(`req.query`, req.query);
    console.log(`title`, `%${req.query.title}%`);
    
    const bookData = await Book.findAll({
      where: {
        title: {
          [Op.like]: `%${req.query.title}%`
        }
      }
    })
    console.log(`bookdata`, bookData);
    const books = bookData.map((book) => book.get({ plain: true }));
    res.render('book', {
      books: books
      // ,
      // logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
