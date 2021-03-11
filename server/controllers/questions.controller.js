const TOKEN = require('../../config.js')
const axios = require('axios');
const API = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';

const options = {
  headers: {
    Authorization: TOKEN
  }
};

const readProductName = (req, res) => {
  axios.get(API + req.path, options)
    .then(product => {
      res.status(200).send(product.data.name);
    })
    .catch(err => {
      res.sendStatus(500);
    })
}

const filterQuestions = (req, res) => {
  let id = req.params.product_id;
  let search = req.params.search;
  let query = API + `/qa/questions/?product_id=${id}&page=1&count=100`;

  axios.get(query, options)
    .then(questions => {
      questions = questions.data.results;
      let filtered = questions.filter(question => {
        if (question.question_body.toLowerCase().includes(search.toLowerCase())) {
          return question;
        } else {
          return null
        }
      })

      res.status(200).send(filtered);
    })
    .catch(err => {
      res.sendStatus(500);
    })
};

const readQuestions = (req, res) => {
  let id = req.query.product_id;
  let page = req.query.page || 1;
  let count = req.query.count || 5;
  let query = API + req.path + `?product_id=${id}&page=${page}&count=${count}`;

  axios.get(query, options)
    .then(questions => {
      res.status(200).send(questions.data);
    })
    .catch(err => {
      res.sendStatus(500);
    })
};

const readAnswers = (req, res) => {
  let page = req.query.page || 1;
  let count = req.query.count || 2;
  let query = API + req.path + `/?page=${page}&count=${count}`;

  axios.get(query, options)
    .then(answers => {
      res.status(200).send(answers.data);
    })
    .catch(err => {
      res.sendStatus(500);
    })
};

const createQuestions = (req, res) => {
  console.log(req.body);
  axios.post(API + req.path, req.body, options)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.sendStatus(500);
    })
};

const createAnswers = (req, res) => {
  axios.post(API + req.path, req.body, options)
  .then(() => {
    res.sendStatus(201);
  })
  .catch(err => {
    res.sendStatus(500);
  })
};

const updateHelpfulQ = (req, res) => {
  axios.put(API + req.path, req.body ,options)
  .then(() => {
    res.sendStatus(204);
  })
  .catch(err => {
    res.sendStatus(500);
  })
};

const updateReportQ = (req, res) => {
  axios.put(API + req.path, {} ,options)
  .then(() => {
    res.sendStatus(204);
  })
  .catch(err => {
    res.sendStatus(500);
  })
};

const updateHelpfulA = (req, res) => {
  axios.put(API + req.path, {} ,options)
  .then(() => {
    res.sendStatus(204);
  })
  .catch(err => {
    res.sendStatus(500);
  })
};

const updateReportA = (req, res) => {
  axios.put(API + req.path, {} ,options)
  .then(() => {
    res.sendStatus(204);
  })
  .catch(err => {
    res.sendStatus(500);
  })
};

module.exports = {
  readProductName,
  filterQuestions,
  readQuestions,
  readAnswers,
  createQuestions,
  createAnswers,
  updateHelpfulQ,
  updateReportQ,
  updateHelpfulA,
  updateReportA
};