const router = require('express').Router();
const { Search } = require('../models');

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    console.log('req', req);
    res.render('search', {       logged_in: req.session.logged_in 
    });
  }
  else {
    res.redirect('/login');
    return;
  }
});

// post a search
router.post('/', async (req, res) => {
  try {
    const newSearch = await Search.create({
      ...req.body.query,
    });
    res.status(200).json(newSearch);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/results', (req, res) => {
//   res.redirect(url.format({
//     pathname:"../books/",
//     query: {
//       isbn: req.query,
//     }
//   })) 
// });

module.exports = router;
