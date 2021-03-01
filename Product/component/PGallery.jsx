import React from 'react';
import styles from '/Users/Ika/Work/frontend-capstone/Product/component/PGallery.module.css'

const Gallery = () => (
  <section>
  <div className={styles.gallery}>
    <img className={styles.main} src="/gallery" alt="dress"></img>
    <div className={styles.thumbnails}>
      <img></img>
      <img></img>
      <img></img>
    </div>
  </div>
  <div className={styles.description1}>
    <h3>Product Slogan</h3>
    <p>Product descripton1</p>
  </div>
</section>
)

export default Gallery;