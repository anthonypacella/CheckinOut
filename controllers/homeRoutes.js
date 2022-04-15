const router = require('express').Router();
const { User, Book } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const bookData = await Book.findAll();
    // Serialize data so the template can read it
    const books = bookData.map((book) => book.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      books
      , 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/api/search');
    return;
  }

  res.render('login');
});

router.get('api/search', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id);

    const user = userData.get({ plain: true });

    res.render('search', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
