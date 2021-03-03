import React from 'react'
import styles from './Thumbnail.module.css'

const Thumbnail = ({img, changeStyle}) => (
  <img src={img} className={styles.thumbnail} onClick={(e) => changeStyle(img)}/>
)

export default Thumbnail;