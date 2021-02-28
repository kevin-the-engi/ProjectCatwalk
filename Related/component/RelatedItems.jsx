import React from 'react';
import dummyData from './DummyData.js';
import ProductCard from './ProductCard.jsx';

class RelatedItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            relatedItems: [],
            productsData: dummyData.productsData,
            stylesData: dummyData.stylesData,
            ratingsData: [],
            compiledData: []    
        }
    }

    componentDidMount() {
        this.setState({
            productsData: dummyData.productsData,
            stylesData: dummyData.stylesData
        });
    }

    // organizeData() {
    //     var relatedItemsArray = this.state.relatedItems;
    //     for (var i = 0; i < relatedItemsArray.length; i++) {

    //     }
    // }

    render() {
        console.log(dummyData);
        console.log(dummyData.productsData);
        console.log('this.state.productsData: ', this.state.productsData); 
        console.log('styles: ', this.state.stylesData[0].results[0].original_price);
        // console.log('styles: ', this.stylesData[0].results[0].original_price);
        return (
            <div>
                <ProductCard productsData={this.state.productsData} stylesData={this.state.stylesData} ratingsData={this.state.ratingsData}/>
            </div>
        )
    }
}

export default RelatedItems;