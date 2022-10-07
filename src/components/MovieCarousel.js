import React from 'react'
import PropTypes from 'prop-types'
import MovieCarouselItem from './MovieCarouselItem';
import "./MovieCarousel.css"

function MovieCarousel(props) {
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
   <div className="movie-picks">
      {props.movies && props.movies.length !== 0 && props.movies.map((movie, index) => {
      return (
        <MovieCarouselItem
          key={index}
          title={props.movies[index].Title}
          released={props.movies[index].Released}
          director={props.movies[index].Director}
          poster={props.movies[index].Poster}
          handleAddClick={props.handleAddClick}
          displayAdd={props.displayAdd}
        />
      )
      })}
  </div>
  )
}

MovieCarousel.propTypes = {
   movies: PropTypes.array,
   handleAddClick: PropTypes.func,
   displayAdd: PropTypes.bool
}

export default MovieCarousel
