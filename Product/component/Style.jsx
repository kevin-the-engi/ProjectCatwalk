import React from 'react'
import styles from './Style.module.css'

const Style = ({img, changeStyle}) => (
  <img src={img} className={styles.style} onClick={(e) => changeStyle(img)}/>
)

export default Style;