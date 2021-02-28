import React from 'react'
import IndividualReview from './IndividualReview.jsx'

const ReviewsList = (props) => {
  return (
    <div>
      {props.reviewList.map((review, i) => {
       return (
         <IndividualReview key={i} review={review}/>
       )
      })}
    </div>
  )
}

export default ReviewsList;