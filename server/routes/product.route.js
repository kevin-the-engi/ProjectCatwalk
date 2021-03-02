const axios = require('axios')
var express = require('express')
var app = express()
var route = express.Router()

// Relace with tester API KEY
//var API = require('../../Product/config.js')

//CONTROLLERS
route.get('/product', (request, response) => {
  // console.log('request id: ', request.query.id);
  getProduct(request.query.id, (err, result) => {
    if (err) {
      response.sendStatus(404)
    } else {
      response.send(result)
    }
  })
})

route.get('/products', (request, response) => {
  console.log('request id: ', request.query.product_id);
  getProductData(request.query.product_id, (err, result) => {
    if (err) {
      response.sendStatus(404)
    } else {
      console.log(result)
      response.send(result)
    }
  })
})

//MODALS
let getProduct = (id, callback) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}/styles`,
    headers: {
      Authorization: API.KEY
    }
  })
  .then(response => {
    callback(null, response.data)
  })
  .catch(err => {
    callback(err, null)
  })
}


let getProductData = function(id, callback) {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
    headers: {
      Authorization: API.KEY
    }
  })
  .then(response =>
    callback(null, response.data)
  )
  .catch(err => {
    callback(err, null)
  }
  )
}

module.exports.route = route;