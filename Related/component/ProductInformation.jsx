import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
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
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
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

    showModal() {
      this.setState({show: true});
    }

    hideModal() {
      this.setState({show: false});
    }

    render() {
        let displayPrice;
        if (this.state.salePrice === null) {
            displayPrice = <div class={styles.price}>${this.state.defaultPrice}</div>;
        } else {
            displayPrice = <div class={styles.price}>${this.state.salePrice}</div>;
        }

        // console.log('this.state.show: ', this.state.show);

        return (
            <div>
                <div className={styles.category}>
                    {this.state.category}
                </div>
                <div class={styles.productName}>
                    {this.state.productName}
                </div>
                {displayPrice}
                <div class={styles.averageRating}>
                    Avg Rating: {this.state.averageRating}
                </div>
                <div className={styles.starButton} onClick={this.showModal}>☆</div>
                <ComparisonModal hideModal={this.hideModal} show={this.state.show} currentItem={this.props.currentItem} relatedItem={this.props.relatedItem}/>
            </div>
        )

    }
}

export default ProductInformation;