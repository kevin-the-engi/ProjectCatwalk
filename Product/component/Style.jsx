import React from 'react'
import styles from './Style.module.css'

const Style = ({style, changeStyle, addSizes}) => (
  <img src={style.photos[0]['thumbnail_url']} className={styles.style} onClick={(e) => {changeStyle(style.photos); addSizes(style.skus)}}/>
)

export default Style;