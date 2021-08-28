import { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';

export default function AddMovieForm() {

    // allows us to use the 
    const history = useHistory();
    const dispatch = useDispatch();

    let [movieDetails, setMovieDetails] = useState({
        title: '', poster: '', description: '', genre: ''
    });

    const submitMovie = (event) => {
        // prevent the form from refreshing page when submitting
        event.preventDefault();
        console.log('new movie', movieDetails);

        dispatch({
            type: 'NEW_MOVIE',
            payload: movieDetails
        });
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
            <select value={movieDetails.genre}
                onChange={(event) => setMovieDetails({...movieDetails, genre: event.target.value})}>
                <option disabled value='0'>Genre</option>
            </select>
            {/* this is our input button to save our form */}
            <input type="submit" value="Save"/>
        </form>
        <button onClick={() => history.push('/')}>Cancel</button>
      </>
    );
}