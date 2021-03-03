import React from 'react';
import styles from './PGallery.module.css'
import Thumbnail from './Thumbnail.jsx'

const Gallery = ({image, thumbnails, changeStyle}) => (
  <div className={styles.right}>
    <div>
      <img className={styles.image} src={image} alt="dress"></img>
      <div className={styles.thumbnails}>
      {thumbnails.map(img =>
        <Thumbnail img={img} changeStyle={changeStyle}/>)}
    </div>
    </div>
    <div className={styles.description1}>
      <h3>Product Slogan</h3>
      <p>Product descripton1</p>
   </div>
  </div>
)


export default Gallery;

