import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftArrowButton from './LeftArrowButton.jsx';
import RightArrowButton from './RightArrowButton.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const RelatedGallery = (props) => {
    return (
        <div className={styles.relatedContainer} id="relatedContainer">
          {/* <div className={styles.arrowButtonContainer}> */}
            <LeftArrowButton/>
            <RightArrowButton/>
          {/* </div> */}
          {props.relatedItems.map((relatedItem) => <ProductCard relatedItem={relatedItem} currentItem={props.currentItem}/>)}
        </div>
    )
}

export default RelatedGallery;