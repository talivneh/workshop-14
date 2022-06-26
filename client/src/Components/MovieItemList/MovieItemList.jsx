import MovieItem from "../MovieItem/MovieItem";
import {useEffect, useState} from "react";
import {fetchMovies} from "../../Services/MovieService";

export default function MovieItemList() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMovies().then(fetchedMovies => {
            setMovies(fetchedMovies);
        });
    }, []);
    return <div>
        {movies.map((movie) => {
            return <MovieItem img={movie.img} title={movie.title} year={movie.year} synopsis={movie.synopsis}
                              id={movie.id} key={movie.title}/>;
        })
        }
    </div>;
};