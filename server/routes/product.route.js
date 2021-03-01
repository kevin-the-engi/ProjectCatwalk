var express = require('express')
var app = express()
var route = express.Router()

route.get('/gallery', (req, res) => {
  res.sendFile('/Users/Ika/Work/frontend-capstone/Product/assets/img/dress.png')
})

module.exports.route = route;