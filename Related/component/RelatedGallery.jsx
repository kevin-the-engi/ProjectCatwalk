import React from 'react';
import ProductCard from './ProductCard.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const RelatedGallery = (props) => {
    return (
        <div className={styles.relatedContainer}>
            {props.relatedItems.map((relatedItem) => <ProductCard relatedItem={relatedItem}/>)}
        </div>
    )
}

export default RelatedGallery;