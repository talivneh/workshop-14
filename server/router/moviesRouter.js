const express = require('express');
const router = express.Router();
const movieService = require('./../service/movieService');

router.get('/', async (req, res, next) => {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies)
});


module.exports = router;