import React from 'react';
import ProductCard from './ProductCard.jsx';
import LeftArrowButton from './LeftArrowButton.jsx';
import RightArrowButton from './RightArrowButton.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const RelatedGallery = (props) => {
    return (
        <div className={styles.relatedContainer} id="relatedContainer">
            <LeftArrowButton/>
            {props.relatedItems.map((relatedItem) => <ProductCard relatedItem={relatedItem}/>)}
            <RightArrowButton/>
        </div>
    )
}

export default RelatedGallery;