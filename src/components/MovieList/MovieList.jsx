import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

export default function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <MovieItem movie={movie}/>
                    </div>
                ))}
            </section>
        </main>

    );
}