const { default: axios } = require('axios')
var express = require('express')
var app = express()
var route = express.Router()
// // Tester should copy/paste their own API key here
// var API_KEY = require('../../Related/config.js');
var API_KEY = '7fbb72373f07510cceba7801f7da3cd70f1af502';

// GET request handler for retrieving information on related products
route.get('/related', (request, response) => {
    // console.log('/related request product_id: ', request.query.product_id);
    getRelatedProductIds(request.query.product_id, (error, productIds) => {
        if (error) {
            console.log('error with getRelatedProductIds invocation');
            response.sendStatus(400);
        } else {
            getProductData(productIds, (error, results) => {
                if (error) {
                    // console.log('error with getRelatedProductData invocation');
                    response.sendStatus(400);
                } else {
                    // console.log('results from GET handler: ', results);
                    response.status(200).send(results);
                }
            })
        }
    })
})

// GET request handler for retrieving information on current product being viewed
// route.get('/current', (request, response) => {
//   // console.log('/current request product_id: ', request.query.product_id);
//   getCurrentProductData(request.query.product_id, (error, results) => {
//     if (error) {
//       console.log('error with getCurrentProductData invocation');
//       response.sendStatus(400);
//     } else {
//       // console.log('results from getCurrentProductData: ', results);
//       response.status(200).send(results);
//     }
//   })
// })

route.get('/current', (request, response) => {
  getProductData([request.query.product_id], (error, results) => {
    if (error) {
      console.log('error with /current getProductData invocation');
      response.sendStatus(400);
    } else {
      response.status(200).send(results);
    }
  })
})

// GET request handler for retrieving information on current product being viewed
// route.get('/current', (request, response) => {
//   console.log('/current request product_id: ', request.query.product_id);

// })

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
            // console.log('response from /related GET request: ', response.data);
            callback(null, response.data);
        })
        .catch((error) => {
            // console.log('error from /related GET request: ');
            callback(error);
        })
}

// helper function to retrieve relevant product data for either the current product or all related items, given the array of product id's from /current or /related
let getProductData = (productIdsArray, callback) => {
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

                            if (relatedProductData.length === productIdsArray.length) {
                                callback(null, relatedProductData);
                            }
                            return relatedProductData;
                        })
                        .catch((error) => {
                            // console.log('error from /reviews/meta GET request: ');
                            callback(error);
                        })
                    })
                    .catch((error => {
                        // console.log('error from /product_id GET request: ');
                        callback(error);
                    }))

            })
            .catch((error) => {
                // console.log('error from /styles GET request: ', error.message);
                callback(error);
            })

    }
}

// helper function for to retrieve product information for the product currently being viewed
// let getCurrentProductData = (id, callback) => {
//   axios({
//     method: 'get',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
//     headers: {
//         Authorization: API_KEY
//     }
//   })
//   .then((response) => {
//     // console.log('response from /current product_id GET request: ', response.data);
//     callback(null, response.data);
//   })
//   .catch((error) => {
//     // console.log('error from /current product_id GET request: ', error.message);
//     callback(error);
//   })
// }

module.exports.route = route;