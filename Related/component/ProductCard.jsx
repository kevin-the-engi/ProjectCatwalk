import React from 'react';
import PreviewImage from './PreviewImage.jsx';
import ProductInformation from './ProductInformation.jsx';
import styles from './css_modules/RelatedGallery.module.css';
import './css_modules/RelatedItems.css';

// const ProductCard = (props) => {
//   let productCardID = 'productCard' + props.index;
//   return (
//       <div className={styles.productCard} id={productCardID}>
//         <a>
//           <PreviewImage relatedItem={props.relatedItem} currentItem={props.currentItem} removeFromOutfit={props.removeFromOutfit}/>
//           <ProductInformation relatedItem={props.relatedItem} currentItem={props.currentItem}/>
//         </a>
//       </div>
//   )
// }

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('this.props.currentItem: ', this.props.relatedItem);
    this.props.viewNewProduct(this.props.relatedItem.product_id);
    // this.props.getData(this.props.relatedItem.product_id);
  }

  render() {
    let productCardID = 'productCard' + this.props.index;
    return (
      <div className={styles.productCard} id={productCardID} onClick={this.handleClick}>
        <a>
          <PreviewImage relatedItem={this.props.relatedItem} currentItem={this.props.currentItem} removeFromOutfit={this.props.removeFromOutfit}/>
          <ProductInformation relatedItem={this.props.relatedItem} currentItem={this.props.currentItem}/>
        </a>
      </div>
    )
  }
}

export default ProductCard;