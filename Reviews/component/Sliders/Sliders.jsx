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
        {props.fiveRatings}
      </div>
      <div className={styles.container}>
        <div className={styles.star}>4 stars</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.fourStars}%`}}></div>
        </div>
        {props.fourRatings}
      </div>
      <div className={styles.container}>
        <div className={styles.star}>3 stars</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.threeStars}%`}}></div>
        </div>
        {props.threeRatings}
      </div>
      <div className={styles.container}>
        <div className={styles.star}>2 stars</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.twoStars}%`}}></div>
        </div>
        {props.twoRatings}
      </div>
      <div className={styles.container}>
        <div className={styles.star}>1 star</div>
        <div className={styles.progress_bar}>
          <div className={styles.filler} style={{width: `${props.oneStar}%`}}></div>
        </div>
        {props.oneRatings}
      </div>
    </div>
  )
}

export default Sliders;