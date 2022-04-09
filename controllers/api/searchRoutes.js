const router = require('express').Router();
const { Search } = require('../../models');

//post a search
router.post('/', async (req, res) => {
  try {
    const newSearch = await Search.create({
      ...req.body
    });

    res.status(200).json(newSearch);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
