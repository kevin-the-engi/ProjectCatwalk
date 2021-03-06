import React from 'react';
import RelatedGallery from './RelatedGallery.jsx';
import axios from 'axios';
import styles from './css_modules/RelatedItemsBanner.module.css';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product_id: '',
      currentItem: [],
      relatedItems: []  
    }
  }

  componentDidMount() {
    // hardcoded product_id temporarily for MVP functionality testing, otherwise pass in the product_id from props
    this.setState({product_id: 14392})
    // get product information for all related items
    axios.get('/related', {
      params: {
        // hardcoded product_id for MVP functionality testing
        product_id: 14392
      }
    })
    .then((response) => {
      console.log('response from /related axios.get: ', response.data);
      this.setState({relatedItems: response.data});
    })
    .catch((error) => {
      console.log('error from axios.get for /related: ', error);
    })

    // get product information for current item, used for comparison modal
    axios.get('/current', {
      params: {
        // hardcoded product_id for MVP functionality testing
        product_id: 14392
      }
    })
    .then((response) => {
      console.log('response from /current axios.get ', response.data);
      this.setState({currentItem: response.data});
    })
    .catch((error => {
      console.log('error from axios.get for /current: ', error);
    }))

}

  render() {
    // console.log('this.state.relatedItems: ', this.state.relatedItems);
    // console.log('this.state.currentItem: ', this.state.currentItem);
    return (
      <div>
        <div className={styles.widgetContainer}>
          <div className={styles.relatedItemsBanner}>
            <p className={styles.sectionTitle}>Related Products</p>
          </div>
          <RelatedGallery relatedItems={this.state.relatedItems} currentItem={this.state.currentItem}/>
          <div className={styles.relatedItemsBanner}>
            <p className={styles.sectionTitle}>Your Outfit</p>
          </div>
        </div>
      </div>
      )
  }
}

export default RelatedItems;