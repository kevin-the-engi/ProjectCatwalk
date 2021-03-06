import React from 'react';
import styles from './PGallery.module.css'
import Thumbnail from './Thumbnail.jsx'

const Gallery = ({image, changeStyle, info, stylePhotos, handleThumbnailClick}) => (
  <div className={styles.right}>
    <div>
      <img className={styles.image} src={image} alt="dress"></img>
      <div className={styles.thumbnails}>
      {stylePhotos.map((photo, i) =>
        <Thumbnail key={i} photo={photo.url} handleThumbnailClick={handleThumbnailClick}/>)}
      </div>
    </div>
    <div className={styles.description1}>
      <h3 className={styles.heading}>{info.slogan}</h3>
      <p className={styles.text}>{info.description}</p>
   </div>
  </div>
)


export default Gallery;

