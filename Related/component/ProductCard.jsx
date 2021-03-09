import React from 'react';
import PreviewImage from './PreviewImage.jsx';
import ProductInformation from './ProductInformation.jsx';
import styles from './css_modules/RelatedGallery.module.css';
import './css_modules/RelatedItems.css';

const ProductCard = (props) => {
  let productCardID = 'productCard' + props.index;
  return (
      <div className={styles.productCard} id={productCardID}>
        <a>
          <PreviewImage relatedItem={props.relatedItem} currentItem={props.currentItem} removeFromOutfit={props.removeFromOutfit}/>
          <ProductInformation relatedItem={props.relatedItem} currentItem={props.currentItem}/>
        </a>
      </div>
  )
}

export default ProductCard;