import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'
import Headshots from '../components/Headshots'
function Movie(props) {
  return (
    <div className='movie-page'>
      <div className='movie-page-poster'>
      </div>
      <div className='movie-page-right'>
         <div className='movie-page-title'>
            Guardians of The Galaxy Vol. 2
         </div>
         <div className='movie-page-description'>
         "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego."
         </div>
         <div className="movie-page-cast-holder">
            <div className="movie-page-cast-title">
               Cast
            </div>
            <div className="movie-page-cast-headshots">
               <Headshots />
            </div>
         </div>
      </div>
      
    </div>
  )
}

Movie.propTypes = {}

export default Movie
