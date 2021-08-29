import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';

export default function AddMovieForm() {

    // data from redux (genres reducer)
    const genres = useSelector(store => store.genres);
    // console.log(genres);

    // allows us to use the 
    const history = useHistory();
    const dispatch = useDispatch();

    let [movieDetails, setMovieDetails] = useState({
        title: '', poster: '', description: '', genre_id: 0
    });

    const submitMovie = (event) => {
        // prevent the form from refreshing page when submitting
        event.preventDefault();
        console.log('new movie', movieDetails);

        dispatch({
            type: 'ADD_MOVIE',
            payload: movieDetails
        });
        // then clear the input form
        setMovieDetails({
            title: '', poster: '', description: '', genre_id: 0
        });
        // then return to home page
        history.push('/');
    }

    return (
      <>
        {/* this shows us the movieDetails' properties as they're updating real time */}
        <pre>{JSON.stringify(movieDetails)}</pre>

        <form onSubmit={submitMovie}>
            <input type="text" placeholder="Title" value={movieDetails.title}
                // change the value of movieDetails' property: title
                onChange={(event) => setMovieDetails({...movieDetails, title: event.target.value})}
            />
            <input type="text" placeholder="Image URL" value={movieDetails.poster}
                // change the value of movieDetails' property: poster
                onChange={(event) => setMovieDetails({...movieDetails, poster: event.target.value})}
            />
            <input type="text" placeholder="Description" value={movieDetails.description}
                // change the value of movieDetails' property: description
                onChange={(event) => setMovieDetails({...movieDetails, description: event.target.value})}
            />
            <select value={movieDetails.genre_id}
                onChange={(event) => setMovieDetails({...movieDetails, genre_id: event.target.value})}>
                <option disabled value='0'>Genre</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
            {/* this is our input button to save our form */}
            <input type="submit" value="Save"/>
        </form>
        <button onClick={() => history.push('/')}>Cancel</button>
      </>
    );
}