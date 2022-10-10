import React from 'react'
import './Headshots.css'

export default function Headshots() {
   const headshots = new Array(5).fill(0);

  return (
    <div className='headshots-holder'>
      {headshots.map((headshot, index) => {
         return (
            <div className='headshot' key={index}>
               <div className='headshot-image'></div>
               <div className='headshot-name'>Name{index}</div>
            </div>
         )
      })}
    </div>
  )
}
