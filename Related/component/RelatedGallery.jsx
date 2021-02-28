import React from 'react';
import ProductCard from './ProductCard.jsx';
import styles from './css_modules/RelatedGallery.module.css';

const RelatedGallery = (props) => {
    return (
        <div className={styles.relatedContainer}>
            <ProductCard productsData={props.productsData} stylesData={props.stylesData} ratingsData={props.ratingsData}/>
        </div>
    )
}

export default RelatedGallery;