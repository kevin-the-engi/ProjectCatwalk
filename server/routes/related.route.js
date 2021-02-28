const { default: axios } = require('axios')
var express = require('express')
var app = express()
var route = express.Router()
var API_KEY = require('../../Related/config.js');

route.get('/related', (request, response) => {
    console.log('request: ', request.query.product_id);
    axios({
        method: 'get',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/:product_id/related',
        params: {
            product_id: request.query.product_id
        },
        headers: {
            Authorization: API_KEY
        }
    })
        .then((response) => {
            //console.log('response from /related GET request: ', response.data);

        })
        .catch((error) => {
            //console.log('error from /related GET request: ', error);
        })
    response.send('hello world');
})

module.exports.route = route;