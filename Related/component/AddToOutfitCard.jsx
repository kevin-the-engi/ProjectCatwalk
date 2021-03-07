import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

const AddToOutfitCard = (props) => {
  return (
    <div className={styles.addToOutfitCard}>
      <div className={styles.addToOutfitCardContainer}>
        <div className={styles.addToOutfitButton}>+</div>
        <div className={styles.addToOutfitLabel}>Add to Outfit</div>
      </div>
    </div>
  )
}

export default AddToOutfitCard;