import React from 'react';

class ProductInformation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            productName: '',
            defaultPrice: '',
            salePrice: '',
            averageRating: ''
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
        // let numberOfReviews = this.props.relatedItem.reviews.ratings[1] + this.props.relatedItem.reviews.ratings[2] + this.props.relatedItem.reviews.ratings[3] + this.props.relatedItem.reviews.ratings[4] + this.props.relatedItem.reviews.ratings[5];
        // console.log('numberOfReviews: ', numberOfReviews);
        // let average = ((1 * this.props.relatedItem.reviews.ratings[1]) + (2 * this.props.relatedItem.reviews.ratings[2]) + (3 * this.props.relatedItem.reviews.ratings[3]) + (4 * this.props.relatedItem.reviews.ratings[4]) + (5 * this.props.relatedItem.reviews.ratings[5])) / numberOfReviews;
        // console.log('average: ', average);
        // return average;
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

        return (
            <div>
                <div class="category">
                    {this.state.category}
                </div>
                <div class="product-name">
                    {this.state.productName}
                </div>
                <div class="price">
                    Original Price: {this.state.defaultPrice}, Sale Price: {this.state.salePrice}
                </div>
                <div class="rating">
                    Average Rating: {this.state.averageRating}
                </div>
            </div>
        )

    }
}

export default ProductInformation;