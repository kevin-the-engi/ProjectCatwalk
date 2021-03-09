import React from 'react';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import ProductCard from './ProductCard.jsx';
import LeftArrowButton from './LeftArrowButton.jsx';
import RightArrowButton from './RightArrowButton.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const OutfitGallery = (props) => {

  return (
    <div className={styles.outfitContainer}>
      {/* <LeftArrowButton/>
      <RightArrowButton/> */}
      <AddToOutfitCard addToOutfit={props.addToOutfit}/>
      {props.outfitItems.map((outfitItem) => <ProductCard relatedItem={outfitItem} removeFromOutfit={props.removeFromOutfit}/>)}
    </div>
  )
}

export default OutfitGallery;