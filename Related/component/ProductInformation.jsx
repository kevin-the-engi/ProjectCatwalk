import React from 'react';

const ProductInformation = (props) => {
    return (
        <div>
            <div class="category">
                {props.productsData[0].category}
            </div>
            <div class="product-name">
                {props.productsData[0].name}
            </div>
            <div class="price">
                {props.stylesData[0].results[0].original_price}
            </div>
            <div class="rating">
                5 Star Rating
            </div>
        </div>
    )
}

export default ProductInformation;