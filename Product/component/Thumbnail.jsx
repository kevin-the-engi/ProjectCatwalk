import React from 'react'
import styles from './Thumbnail.module.css'

const Thumbnail = ({photo, handleThumbnailClick}) => (
  <img className={styles.thumbnail} src={photo} onClick={(e) => handleThumbnailClick(photo)}/>
)

export default Thumbnail;