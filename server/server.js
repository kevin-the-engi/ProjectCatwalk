const product = require('./productRoute.js')
const reviews = require('./reviewsRoute.js')
const relatedItems = require('./relatedItemsRoute.js')
const questions = require('./questionsRoute.js')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use('/', product.route)

app.use('/', reviews.route)

app.use('/', relatedItems.route)

app.use('/', questions.route)

app.use(express.static(path.join(__dirname, '..', '/public')))

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
