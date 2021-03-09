import React from 'react';
import styles from './PGallery.module.css'
import Thumbnail from './Thumbnail.jsx'
import DownArrow from './DownArrow.jsx'
import TopArrow from './TopArrow.jsx'

const Gallery = ({image, info, stylePhotos, handleThumbnailClick}) => (
  <div className={styles.right}>
    <div className={styles.imageDiv}>
      <img className={styles.image} src={image} alt="dress"></img>
      <div id="thumbnails" className={styles.thumbnails}>
      {stylePhotos.map((photo, i) =>
        <Thumbnail key={i} id={i} photo={photo.url} handleThumbnailClick={handleThumbnailClick}/>)}
      </div>
      <TopArrow/>
      <DownArrow/>
    </div>
    <div>
    <div className={styles.description1}>
      <h3 className={styles.heading}>{info.slogan}</h3>
      <p className={styles.text}>{info.description}</p>
   </div>
   </div>
  </div>
)


export default Gallery;

