import React from 'react';
import RelatedGallery from './RelatedGallery.jsx'
import axios from 'axios';

class RelatedItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_id: '',
            relatedItems: []  
        }
    }

    componentDidMount() {
        // hardcoded product_id temporarily for MVP functionality testing, otherwise pass in the product_id from props
        this.setState({product_id: 14392})
        axios.get('/related', {
            params: {
                // hardcoded product_id for MVP functionality testing
                product_id: 14392
            }
        })
            .then((response) => {
                console.log('response from axios.get: ', response.data);
                this.setState({relatedItems: response.data})
            })
            .catch((error) => {
                console.log('error from axios.get: ', error);
            })
    }

    render() {
        console.log('this.state.relatedItems: ', this.state.relatedItems);
        return (
            <div>
                Related Products
                <RelatedGallery relatedItems={this.state.relatedItems}/>
            </div>
        )
    }
}

export default RelatedItems;