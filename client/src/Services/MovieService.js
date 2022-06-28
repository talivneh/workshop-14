export async function fetchMovies() {
    const data = await fetch('/movies')
    const movies = await data.json()
    return movies
}