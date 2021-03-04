import React from 'react'
import styles from './thumbnail.module.css'

const Thumbnail = ({img}) => (
  <img src={img} className={styles.thumbnail}/>
)

export default Thumbnail;