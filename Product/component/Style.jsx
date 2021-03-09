import React from 'react'
import styles from './Style.module.css'

const Style = ({style, changeStyle, id, highlightStyleSelected}) => (
  <img id={id} src={style.photos[0]['thumbnail_url']} className={styles.style} onClick={(e) => changeStyle(style.photos, style,style.skus, id)}/>
)

export default Style;