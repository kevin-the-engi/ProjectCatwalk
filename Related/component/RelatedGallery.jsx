import React from 'react';
import ProductCard from './ProductCard.jsx';
// import LeftArrowButton from './LeftArrowButton.jsx';
// import RightArrowButton from './RightArrowButton.jsx';
import CarouselNavigator from './CarouselNavigator.jsx'
import styles from './css_modules/RelatedGallery.module.css';
import { relatedItems } from '../TestDummyData.js';

const RelatedGallery = (props) => {

  let updateScrollRightCount

  return (
      <div className={styles.relatedContainer} id="relatedContainer">
        <CarouselNavigator/>
        {props.relatedItems.map((relatedItem, index) => <ProductCard getData={props.getData} viewNewProduct={props.viewNewProduct} relatedItem={relatedItem} currentItem={props.currentItem} index={index} key={index}/>)}
      </div>
  )
}

export default RelatedGallery;