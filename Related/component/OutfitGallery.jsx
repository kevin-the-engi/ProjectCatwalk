import React from 'react';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import ProductCard from './ProductCard.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const OutfitGallery = (props) => {
  return (
    <div className={styles.outfitContainer}>
      <AddToOutfitCard/>
    </div>
  )
}

// need outfit props passed down from main app component
// use props to map respective product card components

export default OutfitGallery;