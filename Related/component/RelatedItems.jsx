import React from 'react';
import dummyData from './DummyData.js';
import RelatedGallery from './RelatedGallery.jsx'
import axios from 'axios';

class RelatedItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_id: '',
            relatedItems: [],
            productsData: dummyData.productsData,
            stylesData: dummyData.stylesData,
            ratingsData: [],
            compiledData: []    
        }
    }

    componentDidMount() {
        // hardcoded product_id temporarily for MVP functionality testing
        this.setState({product_id: 14392})
        axios.get('/related', {
            params: {
                // hardcoded product_id for MVP functionlaity testing
                product_id: 14392
            }
        })
            .then((response) => {
                console.log('response from axios.get: ', response);
                this.setState({relatedItems: response.data})
            })
            .catch((error) => {
                console.log('error from axios.get: ', error);
            })
    }

    render() {
        // console.log(dummyData);
        // console.log(dummyData.productsData);
        // console.log('this.state.productsData: ', this.state.productsData); 
        // console.log('styles: ', this.state.stylesData[0].results[0].original_price);
        // console.log('styles: ', this.stylesData[0].results[0].original_price);
        return (
            <div>
                <RelatedGallery productsData={this.state.productsData} stylesData={this.state.stylesData} ratingsData={this.state.ratingsData}/>
            </div>
        )
    }
}

export default RelatedItems;