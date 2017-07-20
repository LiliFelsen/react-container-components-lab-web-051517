// Code MovieReviews Here
import React from 'react'

const MovieReviews = (props) => {
  const review = props.reviews.map(review => {
    return (
      <div className="review">
        <h4>{review.display_title}</h4>
      </div>
    )
  })

  return (
    <div className="review-list">
      {review}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews:[]
}

export default MovieReviews
