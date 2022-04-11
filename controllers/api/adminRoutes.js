const router = require('express').Router();
const { Administrator } = require('../../models/Administrator');
const { Book } = require('../../models/Book');
// const { Branch } = require('../../models/Branch');
// const { CD } = require('../../models/CD');
// const { Movie } = require('../../models/Movie');
const { Patron } = require('../../models/Patron');

router.post('/add/administrator', async (req, res) => {
    try {
        const administratorData = await Administrator.create(req.body); 
        res.status(200).json(administratorData);
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



