var express = require('express')
var app = express()
var route = express.Router()
var API_KEY = require('../../Reviews/config.js')
var API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
var axios = require('axios')

const options = {
  headers: {
    Authorization: API_KEY
  }
}
//Controller
route.post('/reviews', (req, res) => {
  console.log(req.body)
  postReview(req.body, (err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  })
})

//Model
var postReview = (params, callback) => {
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews', params, options)
  .then((response) => {
    callback(null, response.data)
  })
  .catch((err) => {
    callback(err, null)
  })
}

module.exports.route = route;