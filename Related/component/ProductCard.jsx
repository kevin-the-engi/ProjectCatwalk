import React from 'react';
import PreviewImage from './PreviewImage.jsx';
import ProductInformation from './ProductInformation.jsx';
import styles from './css_modules/ProductCard.module.css';

const ProductCard = (props) => {
    return (
        <div className={styles.productCard}>
            <a>
                <PreviewImage stylesData={props.stylesData}/>
                <ProductInformation productsData={props.productsData} stylesData={props.stylesData} ratingsData={props.ratingsData}/>
            </a>
        </div>
    )
}

export default ProductCard;