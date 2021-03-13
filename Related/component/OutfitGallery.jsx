import React from 'react';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import ProductCard from './ProductCard.jsx';
import CarouselNavigator from './CarouselNavigator.jsx'
import styles from './css_modules/RelatedGallery.module.css';

const OutfitGallery = (props) => {
  let gallery = 'outfit';
  return (
    <div className={styles.outfitContainer}>
      <AddToOutfitCard addToOutfit={props.addToOutfit}/>
      {/* <CarouselNavigator gallery={gallery}/> */}
      {props.outfitItems.map((outfitItem, index) => <ProductCard relatedItem={outfitItem} removeFromOutfit={props.removeFromOutfit} viewNewProduct={props.viewNewProduct} index={index} key={index}/>)}
    </div>
  )
}

export default OutfitGallery;