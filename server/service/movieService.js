const movies = require('./movies.json');

async function getAllMovies() {
    return movies;
}

module.exports = {
    getAllMovies
};