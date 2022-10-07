import React from 'react'
import PropTypes from 'prop-types'
import './MovieCarouselItem.css'

function MovieCarouselItem(props) {
  return (
   <div className='movie-pick'>
      {props.displayAdd ? 
         <div 
         className="movie-add-button" 
         onClick={() => {props.handleAddClick(props.poster, props.title, props.released, props.director)}}
         >
            +
         </div> : null
      }
      <div 
         className="movie-poster" 
         style={{backgroundImage: props.poster ? `url("${props.poster})` : ""}}
         // onClick={direct to movie page}     
      ></div>
      <div className='movie-description'>
         <div className="movie-title">{props ? props.title : ""}</div>
         <div className="movie-year">{props ? props.released : ""}</div>
         <div className="movie-director">{props ? props.director : ""}</div>
      </div>
   </div>
  )
}

MovieCarouselItem.propTypes = {
   director: PropTypes.string,
   poster: PropTypes.string,
   title: PropTypes.string,
   released: PropTypes.string,
   handleAddClick: PropTypes.func,
}

export default MovieCarouselItem
