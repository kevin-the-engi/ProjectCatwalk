const product = require('./routes/product.route.js')
const related = require('./routes/related.route.js')
const reviews = require('./routes/reviews.route.js')
const questions = require('./routes/questions.route.js')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, '..', '/public')))

app.use('/', product.route)
app.use('/', reviews.route)
app.use('/', related.route)
app.use('/', questions.route)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
