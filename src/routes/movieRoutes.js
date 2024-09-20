const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get(
    '/get/all',
    (req, res) => movieController.getAllMovies(req, res)
)
router.post(
    '/create',
    (req, res) => movieController.createMovie(req, res)
)
router.get(
    '/get/id/:id',
    (req, res) => movieController.getMovieById(req, res)
)
router.put(
    '/update/id/:id',
    (req, res) => movieController.updateMovie(req, res)
)
router.delete(
    '/delete/id/:id',
    (req, res) => movieController.deleteMovie(req, res)
)



module.exports = router;
