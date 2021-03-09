import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class ProductInformation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            productName: '',
            defaultPrice: '',
            salePrice: '',
            averageRating: '',
            show: false
        }
    }

    componentDidMount() {
        this.setState({
            category: this.props.relatedItem.product.category,
            productName: this.props.relatedItem.product.name,
            averageRating: this.calculateAverageRating()
        })
        // check which style is the default style, and whether there is a sale price
        this.findPrices();
    }

    calculateAverageRating() {
        let numberOfReviews = 0;
        let weightedSum = 0;
        for (let key in this.props.relatedItem.reviews.ratings) {
            numberOfReviews += Number(this.props.relatedItem.reviews.ratings[key]);
            weightedSum += (Number(this.props.relatedItem.reviews.ratings[key]) * key);
        }

        return (weightedSum / numberOfReviews).toFixed(2);
    }

    findPrices() {
        for (let i = 0; i < this.props.relatedItem.styles.results.length; i++) {
            if (this.props.relatedItem.styles.results[i]['default?']) {
                this.setState({defaultPrice: this.props.relatedItem.styles.results[i].original_price})
                if (this.props.relatedItem.styles.results[i].sale_price !== null) {
                    this.setState({salePrice: this.props.relatedItem.styles.results[i].sale_price})
                } else {
                    this.setState({salePrice: null})
                }
            }
        }
    }

    render() {
        let displayPrice;
        if (this.state.salePrice === null) {
            displayPrice = <div class={styles.defaultPrice}>${this.state.defaultPrice}</div>;
        } else {
            displayPrice = <div class={styles.salePrice}>${this.state.salePrice}</div>;
        }

        let starRating;
        if (Math.round(this.state.averageRating) === 1) {
          starRating = '★☆☆☆☆';
        } else if (Math.round(this.state.averageRating) === 2) {
          starRating = '★★☆☆☆';
        } else if (Math.round(this.state.averageRating) === 3) {
          starRating = '★★★☆☆';
        } else if (Math.round(this.state.averageRating) === 4) {
          starRating = '★★★★☆';
        } else if (Math.round(this.state.averageRating) === 5) {
          starRating = '★★★★★';
        }

        return (
            <div className={styles.productInformationContainer}>
              <div className={styles.categoryContainer}>
                <div className={styles.category}>
                    {this.state.category}
                </div>
              </div>
              <div className={styles.productDetailsContainer}>
                <div class={styles.productName}>
                    {this.state.productName}
                </div>
                {displayPrice}
                <div class={styles.averageRating}>
                    {starRating}
                </div>
              </div>
            </div>
        )

    }
}

export default ProductInformation;