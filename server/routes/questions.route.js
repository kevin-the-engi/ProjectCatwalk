const express = require('express');
const api = require('../controllers/questions.controller.js');

const app = express();
const route = express.Router();

route.get('/products/:product_id', api.readProductName);

route.get('/qa/questions', api.readQuestions);

route.get('/qa/questions/:question_id/answers', api.readAnswers);

route.post('/qa/questions/', api.createQuestions);

route.post('/qa/questions/:question_id/answers', api.createAnswers);

route.put('/qa/questions/:question_id/helpful', api.updateHelpfulQ);

route.put('/qa/questions/:question_id/report', api.updateReportQ);

route.put('/qa/answers/:answer_id/helpful', api.updateHelpfulA);

route.put('/qa/answers/:answer_id/report', api.updateReportA);

module.exports.route = route;