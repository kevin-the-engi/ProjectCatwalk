import React from 'react'
import styles from './Sliders.module.css'

const Sliders = (props) => {

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.star}>5 stars</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.fiveStars}%`}}></div>
        </div>
        <div className={styles.rating}>{props.fiveRatings}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.star}>4 stars</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.fourStars}%`}}></div>
        </div>
        <div className={styles.rating}>{props.fourRatings}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.star}>3 stars</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.threeStars}%`}}></div>
        </div>
        <div className={styles.rating}>{props.threeRatings}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.star}>2 stars</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.twoStars}%`}}></div>
        </div>
        <div className={styles.rating}>{props.twoRatings}</div>
      </div>
      <div className={styles.container}>
        <div className={styles.star}>1 star</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.oneStar}%`}}></div>
        </div>
        <div className={styles.rating}>{props.oneRatings}</div>
      </div>
    </div>
  )
}

export default Sliders;