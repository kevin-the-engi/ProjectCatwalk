import React from 'react';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import ProductCard from './ProductCard.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const OutfitGallery = (props) => {

  // In order to reuse the ProductCard component, passing down outfitItem as a variable called relatedItem
  return (
    <div className={styles.outfitContainer}>
      <AddToOutfitCard addToOutfit={props.addToOutfit}/>
      {props.outfitItems.map((outfitItem) => <ProductCard relatedItem={outfitItem}/>)}
    </div>
  )
}

export default OutfitGallery;