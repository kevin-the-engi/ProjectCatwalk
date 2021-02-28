import React from 'react'

const IndividualReview = (props) => {
  return (
    <div>
      <div>
        Summary: {props.review.summary}
      </div>
      <div>
        Body: {props.review.body}
      </div>
    </div>
  )
}

export default IndividualReview;