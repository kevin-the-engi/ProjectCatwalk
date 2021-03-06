import React from 'react';
import styles from './Stars.module.css'

const Stars = (props) => {
  return (
    <div>
      <input className={styles.star} name="1" value="★"></input>
      {props.rating > 1 ?
      <input className={styles.star} name="2" value="★"></input> :
      <input className={styles.star} name="2" value="☆"></input>}
      {props.rating > 2 ?
      <input className={styles.star} name="3" value="★"></input> :
      <input className={styles.star} name="3" value="☆"></input>}
      {props.rating > 3 ?
      <input className={styles.star} name="4" value="★"></input> :
      <input className={styles.star} name="4"value="☆"></input>}
      {props.rating > 4 ?
      <input className={styles.star} name="5" value="★"></input> :
      <input className={styles.star} name="5" value="☆"></input>}
    </div>
  )
}

export default Stars;