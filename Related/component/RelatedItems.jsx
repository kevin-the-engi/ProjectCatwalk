import React from 'react';
import RelatedGallery from './RelatedGallery.jsx';
import OutfitGallery from './OutfitGallery.jsx';
import axios from 'axios';
import styles from './css_modules/RelatedItemsBanner.module.css';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: this.props.productId,
      currentItem: [],
      relatedItems: [],
      outfitItems: []
    }
    this.addToOutfit = this.addToOutfit.bind(this);
    this.removeFromOutfit = this.removeFromOutfit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this.props.productId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productId !== prevProps.productId) {
      this.setState({product_id: this.props.productId});
      this.getData(this.props.productId);
    }
  }

  getData(id) {
    // get product information for all related items
    axios.get('/related', {
      params: {
        // hardcoded product_id for MVP functionality testing
        product_id: id
      }
    })
    .then((response) => {
      // console.log('response from /related axios.get: ', response.data);
      this.setState({relatedItems: response.data});
    })
    .catch((error) => {
      // console.log('error from axios.get for /related: ', error);
    })

    // get product information for current item, used for comparison modal
    axios.get('/current', {
      params: {
        // hardcoded product_id for MVP functionality testing
        product_id: id
      }
    })
    .then((response) => {
      // console.log('response from /current axios.get ', response.data);
      this.setState({currentItem: response.data});
    })
    .catch((error => {
      // console.log('error from axios.get for /current: ', error);
    }))
  }

  addToOutfit() {
    this.setState({outfitItems: [...this.state.outfitItems, this.state.currentItem[0]]})
  }

  removeFromOutfit(productID) {
    let outfitArray = this.state.outfitItems;
    for (let i = 0; i < outfitArray.length; i++) {
      if (productID === outfitArray[i].product_id) {
        outfitArray.splice(i, 1);
        break;
      }
    }
    this.setState({outfitItems: outfitArray});
  }

  render() {
    // console.log('this.state.relatedItems: ', this.state.relatedItems);
    // console.log('this.state.currentItem: ', this.state.currentItem);
    // console.log('this.state.outfitItems: ', this.state.outfitItems);
    return (
      <div  className={styles.widget}>
        <div className={styles.widgetContainer}>
          <div className={styles.relatedItemsBanner} key={'relatedItemsBanner'}>
            <p className={styles.sectionTitle}>Related Products</p>
          </div>
          <RelatedGallery relatedItems={this.state.relatedItems} currentItem={this.state.currentItem} viewNewProduct={this.props.viewNewProduct} getData={this.getData}/>
          <div className={styles.relatedItemsBanner}>
            <p className={styles.sectionTitle}>Your Outfit</p>
          </div>
          <OutfitGallery addToOutfit={this.addToOutfit} removeFromOutfit={this.removeFromOutfit} outfitItems={this.state.outfitItems} viewNewProduct={this.props.viewNewProduct}/>
        </div>
      </div>
      )
  }
}

export default RelatedItems;