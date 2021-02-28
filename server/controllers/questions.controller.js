const TOKEN = require('../../Questions/config.js');
const axios = require('axios');
const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const options = {
  headers: {
    'Authorization': TOKEN
  }
};

console.log(options);

const readQuestions = (req, res) => {
  let id = req.query.product_id;
  let query = API + req.path + '?product_id=' + id;
  console.log(query);

  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/qa/questions/${id}`,
    headers: {
      Authorization: TOKEN
    }
  })
  .then(questions => {
    res.status(200).send(questions);
  })
  .catch(err => {
    console.log(err);
    res.send(500);
  })

  // axios.get(query, options)
  //   .then(questions => {
  //     res.status(200).send(questions);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.sendStatus(500);
  //   })
  // res.send('Calm down, I am trying to GET your questions');
};

const readAnswers = (req, res) => {
  res.send('What kind of answer were you expecting to GET?');
};

const createQuestions = (req, res) => {
  res.send('I see you trying to POST a question.');
};

const createAnswers = (req, res) => {
  res.send('I see you trying to POST an answer.');
};

const updateHelpfulQ = (req, res) => {
  res.send('Let us PUT a pin on that helpful question');
};

const updateReportQ = (req, res) => {
  res.send('PUT your hands up! You are reported for a bad question!');
};

const updateHelpfulA = (req, res) => {
  res.send('Your answer was actually helpful so let\'s PUT that up.');
};

const updateReportA = (req, res) => {
  res.send('I don\'t have to PUT up with your lame answer!');
};

module.exports = {
  readQuestions,
  readAnswers,
  createQuestions,
  createAnswers,
  updateHelpfulQ,
  updateReportQ,
  updateHelpfulA,
  updateReportA
};