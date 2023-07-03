import React from 'react'

const Rating = ({value,text}) => {
  return (
    <div className='rating'>
       <span>Rating-{value}</span>
       <div>
       <span>{text}</span>
       </div>
    </div>
  )
}

export default Rating