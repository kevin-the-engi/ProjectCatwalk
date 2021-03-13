import React from 'react';
import styles from './Stars.module.css'

const Stars = (props) => {
  return (
    <div className={styles.starContainer}>
      <div className={styles.star}>★</div>
      {props.rating > 1 ?
      <div className={styles.star}>★</div> :
      <div className={styles.star}>☆</div>}
      {props.rating > 2 ?
      <div className={styles.star}>★</div> :
      <div className={styles.star}>☆</div>}
      {props.rating > 3 ?
      <div className={styles.star}>★</div> :
      <div className={styles.star}>☆</div>}
      {props.rating > 4 ?
      <div className={styles.star}>★</div> :
      <div className={styles.star}>☆</div>}
    </div>
  )
}

export default Stars;