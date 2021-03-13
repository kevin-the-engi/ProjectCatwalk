import React from 'react'
import styles from './thumbnail.module.css'

const Thumbnail = ({photo, handleThumbnailClick, id}) => (
  <div>
  <img id={id} className={styles.thumbnail} src={photo} onClick={(e) => handleThumbnailClick(photo, id)}/>
  </div>
)


export default Thumbnail;