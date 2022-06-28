const { Movie } = require('./../storage/models');

async function getAllMovies() {
    try {
        let movies = await Movie.findAll();
        console.log("Quering movies", movies);
        return movies
    } catch (e) {
        console.log("Failed to fetch movies", e);
    }
}

module.exports = {
    getAllMovies
};