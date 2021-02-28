const { default: axios } = require('axios')
var express = require('express')
var app = express()
var route = express.Router()
var API_KEY = require('../../Related/config.js');

route.get('/related', (request, response) => {
    console.log('request product_id: ', request.query.product_id);
    getRelatedProductIds(request.query.product_id, (error, productIds) => {
        if (error) {
            console.log('error with getRelatedProductIds invocation');
            // set error status here
        } else {
            getRelatedProductData(productIds, (error, results) => {
                if (error) {
                    console.log('error with getRelatedProductData invocation');
                } else {
                    // console.log('results from GET handler: ', results);
                    response.send(results);
                }
            })
        }
    })

})

// helper function to retrieve product id's of all related items, given the product id of current item being displayed
let getRelatedProductIds = (id, callback) => {
    axios({
        method: 'get',
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/related`,
        headers: {
            Authorization: API_KEY
        }
    })
        .then((response) => {
            console.log('response from /related GET request: ', response.data);
            callback(null, response.data);
        })
        .catch((error) => {
            console.log('error from /related GET request: ');
        })
}

// helper function to retrieve styles data of all related items, given the array of product's from /related
let getRelatedProductData = (productIdsArray, callback) => {
    let relatedProductData = [];
    for (let i = 0; i < productIdsArray.length; i++) {
        let eachProduct = {};
        eachProduct.product_id = productIdsArray[i]
        axios({
            method: 'get',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productIdsArray[i]}/styles`,
            headers: {
                Authorization: API_KEY
            }
        })
            .then((response) => {
                // console.log('response from /styles GET request: ', response.data);
                eachProduct.styles = response.data;

                axios({
                    method: 'get',
                    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${productIdsArray[i]}/`,
                    headers: {
                        Authorization: API_KEY
                    }
                })
                    .then((response) => {
                        eachProduct.product = response.data;

                        axios({
                            method: 'get',
                            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta?product_id=${productIdsArray[i]}`,
                            headers: {
                                Authorization: API_KEY
                            }
                        })
                        .then((response) => {
                            eachProduct.reviews = response.data;
                            relatedProductData.push(eachProduct);
                            // console.log('eachProduct: ', eachProduct);
                            // console.log('relatedProductData: ', relatedProductData);
                            if (i === productIdsArray.length - 1) {
                                // console.log('final return data: ', relatedProductData);
                                callback(null, relatedProductData);
                            }
                        })
                        .catch((error) => {
                            console.log('error from /reviews/meta GET request: ');
                        })
                    })
                    .catch((error => {
                        console.log('error from /product_id GET request: ');
                    }))

            })
            .catch((error) => {
                console.log('error from /styles GET request: ', error.message);
            })
    
    }
}

module.exports.route = route;