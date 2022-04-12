const router = require('express').Router();
const { Search, Book } = require('../../models');
const url = require('url');    

router.get('/', (req, res) => {
  res.render('search', { message: `success` });
});

// post a search
router.post('/', async (req, res) => {
  try {
    const newSearch = await Search.create({
      ...req.body
    });
    console.log(newSearch.isbn);
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
