import './App.css';

function App() {
  function handleAddClick() {
    console.log('add');
  }

  const movieData = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
    },
    {
      title: 'The Godfather: Part II',
      year: '1974',
      director: 'Francis Ford Coppola',
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      director: 'Christopher Nolan',
    },
    {
      title: "Schindler's List",
      year: '1993',
      director: 'Steven Spielberg',
    },
    {
      title: 'Pulp Fiction',
      year: '1994',
      director: 'Quentin Tarantino',
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: '2003',
      director: 'Peter Jackson',
    },
  ];
  return (
    <div className="App">
      <div className="nav">
        <div>MoviePickr</div>
      </div>
      <div className="main">
        <div className="movie-picks">
          {movieData.map(movie => {
            return (
              <div className="movie-pick">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-year">{movie.year}</div>
                <div className="movie-director">{movie.director}</div>
                <div className="movie-add-button" onClick={handleAddClick}>Add</div>
              </div>
            )
          })}
        </div>
        <div className="movie-recommendations">
          Your Recommendations
        </div>
      </div>
    </div>
  );
}

export default App;
