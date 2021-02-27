var express = require('express');
const TOKEN = require('../../Questions/component/config.js');
const axios = require('axios');

var app = express();
var route = express.Router();
const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

route.get('/qa/questions', (req, res) => {
  res.send('Calm down, I am trying to GET your questions');
});

route.get('/qa/questions/:question_id/answers', (req, res) => {
  res.send('What kind of answer were you expecting to GET?');
});

route.post('/qa/questions/', (req, res) => {
  res.send('I see you trying to POST a question.');
});

route.post('/qa/questions/:question_id/answers', (req, res) => {
  res.send('I see you trying to POST an answer.');
})

route.put('/qa/questions/:question_id/helpful', (req, res) => {
  res.send('Let us PUT a pin on that helpful question');
});

route.put('/qa/questions/:question_id/report', (req, res) => {
  res.send('PUT your hands up! You are reported for a bad question!');
});

route.put('/qa/answers/:answer_id/helpful', (req, res) => {
  res.send('Your answer was actually helpful so let\'s PUT that up.');
})

route.put('/qa/answers/:answer_id/report', (req, res) => {
  res.send('I don\'t have to PUT up with your lame answer!');
})

module.exports.route = route;