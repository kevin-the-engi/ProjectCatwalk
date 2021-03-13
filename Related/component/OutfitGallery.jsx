import React from 'react';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import ProductCard from './ProductCard.jsx';
import LeftArrowButton from './LeftArrowButton.jsx';
import RightArrowButton from './RightArrowButton.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const OutfitGallery = (props) => {

  return (
    <div className={styles.outfitContainer}>
      <AddToOutfitCard addToOutfit={props.addToOutfit}/>
      {/* <LeftArrowButton/>
      <RightArrowButton/> */}
      {props.outfitItems.map((outfitItem, index) => <ProductCard relatedItem={outfitItem} removeFromOutfit={props.removeFromOutfit} viewNewProduct={props.viewNewProduct} index={index} key={index}/>)}
    </div>
  )
}

export default OutfitGallery;