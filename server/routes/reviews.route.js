var express = require('express')
var app = express()
var route = express.Router()
//var API_KEY = require('../../Reviews/config.js')
var API_KEY = require('../../config.js')
var API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
var axios = require('axios')

const options = {
  headers: {
    Authorization: API_KEY
  }
}
//Controller
route.post('/reviews', (req, res) => {
  postReview(req.body, (err, results) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  })
})

route.get('/reviews/', (req, res) => {
  getReviews(req.query.product_id, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(results.data);
    }
  })
})

route.get('/reviews/meta', (req, res) => {
  getMetaReviews(req.query.product_id, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(results.data);
    }
  })
})

route.get('/products/', (request, response) => {
  getProductName(request.query.product_id, (err, result) => {
    if (err) {
      response.sendStatus(404)
    } else {
      response.send(result)
    }
  })
})

route.put('/reviews/', (req, res) => {
  putHelpful(req.body.review_id, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(results.data);
    }
  })
})

route.put('/reviews/report', (req, res) => {
  putReport(req.body.review_id, (err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(results.data);
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

var getReviews = (id, callback) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/`,
    headers: {
      Authorization: API_KEY
    },
    params: {
      count: 150,
      product_id: id
    }
  })
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    callback(err, null)
  })
}

var getMetaReviews = (id, callback) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/meta`,
    headers: {
      Authorization: API_KEY
    },
    params: {
      product_id: id
    }
  })
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    callback(err, null)
  })
}

var getProductName = (id, callback) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products/${id}`,
    headers: {
      Authorization: API_KEY
    }

  })
  .then((response) => {
    callback(null, response.data)
  })
  .catch((err) => {
    callback(err, null)
  })
}


var putHelpful = (id, callback) => {
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${id}/helpful`,
    headers: {
      Authorization: API_KEY
    }
  })
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    callback(err, null)
  })
}

var putReport = (id, callback) => {
  axios({
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/reviews/${id}/report`,
    headers: {
      Authorization: API_KEY
    }
  })
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    callback(err, null)
  })
}

module.exports.route = route;