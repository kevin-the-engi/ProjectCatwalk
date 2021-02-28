import React from 'react';
import PreviewImage from './PreviewImage.jsx';
import ProductInformation from './ProductInformation.jsx';

const ProductCard = (props) => {
    return (
        <div>
            <a>
                <PreviewImage stylesData={props.stylesData}/>
                <ProductInformation productsData={props.productsData} stylesData={props.stylesData} ratingsData={props.ratingsData}/>
            </a>
        </div>
    )
}

export default ProductCard;