// const fetch = require()

export async function fetchMovies() {
    const data = await fetch('/movies')
    const res = await data.json()
    return res.movies
}