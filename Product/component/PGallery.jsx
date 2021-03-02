import React from 'react';
import styles from './pGallery.module.css'
import Thumbnail from './Thumbnails.jsx'

const Gallery = ({image, thumbnails}) => (
    <section>
    <div className={styles.gallery}>
      <img className={styles.main} src={image} alt="dress"></img>
      <div className={styles.thumbnails}>
        {thumbnails.map(img =>
          <Thumbnail img={img} />)}
      </div>
      <div className={styles.description1}>
        <h3>Product Slogan</h3>
        <p>Product descripton1</p>
     </div>
    </div>
  </section>
)

export default Gallery;

// return (
//   <section>
//   <div className={styles.gallery}>
//     <img className={styles.main} src={this.props.image} alt="dress"></img>
//     <div className={styles.thumbnails}>
//     </div>
//   </div>
//   <div className={styles.description1}>
//     <h3>Product Slogan</h3>
//     <p>Product descripton1</p>
//   </div>
// </section>