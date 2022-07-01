const { Movie } = require('./../storage/models');

async function getAllMovies() {
    try {
        let movies = await Movie.findAll();
        console.log("Querying DB movies. Total movies", movies ? movies.length : 0);
        return movies
    } catch (e) {
        console.log("Failed to fetch movies", e);
    }
}

module.exports = {
    getAllMovies
};