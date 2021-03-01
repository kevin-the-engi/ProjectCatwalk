import React from 'react';
import styles from './IndividualReview.module.css';
//import Date from './Date.jsx'

const IndividualReview = (props) => {
  return (
    <div className={styles.individualReview}>
      <div className={styles.header}>
        <div>
        {props.review.rating}
        </div>
        <div className={styles.headerRight}>
          <div>
            {props.review.reviewer_name}
          </div>
          <div>
            {props.review.date}
          </div>
        </div>
      </div>
      <div className={styles.summary}>
        {props.review.summary}
      </div>
      <div>
        {props.review.body}
      </div>
      <div>
        Helpful? Yes ({props.review.helpfulness}) | Report
      </div>
    </div>
  )
}

export default IndividualReview;