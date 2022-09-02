import React from 'react'
import PropTypes from 'prop-types'
import './MovieCarouselItem.css'

function MovieCarouselItem(props) {
   console.log(props.title, "props.title")
  return (
   <div className='movie-pick'>
      <div className="movie-add-button" onClick={() => { props.handleAddClick(props.poster, props.title, props.year, props.director)}}>+</div>
      <div className="movie-poster" style={{backgroundImage: props.poster ? `url("${props.poster})` : ""}}></div>
      <div className='movie-description'>
         <div className="movie-title">{props ? props.title : ""}</div>
         <div className="movie-year">{props ? props.year : ""}</div>
         <div className="movie-director">{props ? props.director : ""}</div>
      </div>
   </div>
  )
}

MovieCarouselItem.propTypes = {
   director: PropTypes.string,
   poster: PropTypes.string,
   title: PropTypes.string,
   year: PropTypes.string,
   handleAddClick: PropTypes.func,
}

export default MovieCarouselItem
