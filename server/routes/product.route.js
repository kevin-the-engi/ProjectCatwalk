const axios = require('axios')
var express = require('express')
var app = express()
var route = express.Router()

// Replace with tester API KEY
var API = require('../../Product/config.js')

//CONTROLLERS
route.get('/product/styles', (request, response) => {
  // console.log('request id: ', request.query.id);
  getProductStyles(request.query.id, (err, result) => {
    if (err) {
      response.sendStatus(404)
    } else {
      response.send(result)
    }
  })
})

route.get('/product/data', (request, response) => {
  getProductData(request.query.id, (err, result) => {
    if (err) {
      response.sendStatus(404)
    } else {
      response.send(result)
    }
  })
})

//MODALS
let getProductStyles = (id, callback) => {
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