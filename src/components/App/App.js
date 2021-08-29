import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import Details from '../Details/Details';

function App() {
  const dispatch = useDispatch();

  // go get data from the server
  useEffect(() => {
    dispatch({type: 'FETCH_GENRES' });
  });

  return (
    <div className="App">
    <h1>The Movies Saga!</h1>
      <Router>
        <nav>
          <Link to="/addMovieForm">Add Movie Page</Link>
        </nav>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
        <Route path="/addMovieForm">
          <AddMovieForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;