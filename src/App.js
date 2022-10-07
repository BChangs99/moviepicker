import { useEffect, useState } from 'react';
import './App.css';
import MovieCarousel from './components/MovieCarousel';
import keys from './keys.json'

// ToDo:
// 1. Add TMDB attribution
// 2. Add TMDB call for list of movies

function App() {
  const [gog, setGog] = useState(null);
  const [movieList, setMovieList] = useState([]);

  function handleAddClick(Poster, Title, Released, Director) {
    setMovieList([...movieList, { Poster, Title, Released, Director }]);
  }

  // State checking console.log
  useEffect(() => {
    console.log(movieList, "movieList");
  }, [movieList]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${keys.OMDBKEY}`)
    .then(res => res.json())
    .then(result => {
      setGog([result]);
    })
    .catch(err => console.log(err));
  } , []);

  return (
    <div className="App">
      {/* Componentize navbar -- also add other pages w/ React-Router */}
      <div className="nav">
        <div>MoviePickr</div>
      </div>
      <div className="main">
        {gog ? <MovieCarousel movies={gog} handleAddClick={handleAddClick} displayAdd={true} /> : null}
        <div className="movie-recommendations">
          {movieList && movieList[0] ? <MovieCarousel movies={movieList} handleAddClick={handleAddClick} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
