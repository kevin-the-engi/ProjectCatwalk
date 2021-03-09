import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftArrowButton from './LeftArrowButton.jsx';
import RightArrowButton from './RightArrowButton.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const RelatedGallery = (props) => {
  return (
      <div className={styles.relatedContainer} id="relatedContainer">
        <LeftArrowButton/>
        <RightArrowButton/>
        {props.relatedItems.map((relatedItem, index) => <ProductCard relatedItem={relatedItem} currentItem={props.currentItem} index={index}/>)}
      </div>
  )
}

export default RelatedGallery;