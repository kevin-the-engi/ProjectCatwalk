import React from 'react';
import ProductCard from './ProductCard.jsx';
import CarouselNavigator from './CarouselNavigator.jsx'
import styles from './css_modules/RelatedGallery.module.css';
import { relatedItems } from '../TestDummyData.js';

const RelatedGallery = (props) => {
  let gallery = 'related';
  
  return (
      <div className={styles.relatedContainer} id="relatedContainer">
        <CarouselNavigator gallery={gallery}/>
        {props.relatedItems.map((relatedItem, index) => <ProductCard getData={props.getData} viewNewProduct={props.viewNewProduct} relatedItem={relatedItem} currentItem={props.currentItem} index={index} key={index}/>)}
      </div>
  )
}

export default RelatedGallery;