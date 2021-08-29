import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

export default function MovieItem({ movie }) {

    // allows us to use the features we imported above
    const history = useHistory();
    const dispatch = useDispatch();

    const showDetails = () => {
        dispatch({
            type: 'SHOW_MOVIE_DETAILS',
            payload: movie
        });
        history.push('/details')
    }

    return (
      <>
        <h3>{movie.title}</h3>
        <img onClick={showDetails} src={movie.poster} alt={movie.title}/>
      </>
    );
}