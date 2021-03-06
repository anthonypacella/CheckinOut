const router = require('express').Router();
const Administrator = require('../../models/Administrator.js');
const { Book } = require('../../models/');
// const { Branch } = require('../../models/Branch');
// const { CD } = require('../../models/CD');
// const { Movie } = require('../../models/Movie');
const Patron = require('../../models/Patron.js');

router.post('/add/administrator', async (req, res) => {
    try {
        const adminData = await Administrator.create(req.body); 
        res.status(200).json(adminData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/add/book', async (req, res) => {
    try {
        const bookData = await Book.create(req.body); 
        res.status(200).json(bookData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// router.post('/add/branch', async (req, res) => {
//     try {
//         const branchData = await Branch.create(req.body); 
//         res.status(200).json(branchData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.post('/add/cd', async (req, res) => {
//     try {
//         const cdData = await CD.create(req.body); 
//         res.status(200).json(cdData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.post('/add/movie', async (req, res) => {
//     try {
//         const movieData = await Movie.create(req.body); 
//         res.status(200).json(movieData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.post('/add/patron', async (req, res) => {
    try {
        const patronData = await Patron.create(req.body); 
        res.status(200).json(patronData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
      const adminData = await Administrator.findAll();
      res.status(200).json(adminData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:rowid', async (req, res) => {
    try {
        const adminData = await Administrator.findByPk(req.params.rowid);
        res.status(200).json(adminData);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.delete('/:rowid', async (req, res) => {
    try {
        const adminData = await Administrator.destroy({
            where: {
                id: req.params.rowid
            }
        });
        res.status(200).json(adminData);
      } catch (err) {
        res.status(500).json(err);
      }
});

router.post('/login', async (req, res) => {
    try {
      const adminData = await Administrator.findOne({ where: { email: req.body.email } });
      
      if (!adminData) {
        res
          .status(404)
          .json({ message: 'Email is incorrect' });
        return;
      }
  
      req.session.save(() => {
        req.session.admin_id = adminData.id;
        req.session.logged_in = true;
        
        res.json({ admin: adminData, message: 'You are now logged in!' });
      });
      
  
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });


  

module.exports = router;



