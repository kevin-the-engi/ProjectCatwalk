import React from 'react';
import styles from './PInfo.module.css';

const Info = () => (
  <section>
    <div className={styles.info}>
      <div className={styles.reviews}>Reviews</div>
      <p className={styles.category}>CATEGORY</p>
      <p className={styles.name}>Expanded Product Name</p>
      <p>$369</p>
      <div className="sytle-selector">Style Selector</div>
      <select>Size</select>
      <select>Quantity</select>
      <button>Checkout</button>
      <button>favorite</button>
      </div>
      <div className={styles.description2}>
        <ul>Product descripton2</ul>
      </div>
  </section>
)

export default Info;