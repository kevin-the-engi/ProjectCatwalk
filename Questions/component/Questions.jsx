import React from 'react';
import axios from 'axios';
import styles from '../css/Questions.css';
import SearchBar from './SearchBar/SearchBar.jsx';
import QList from './QuestionList/QList.jsx';
import MoreQ from './MoreQ.jsx';
import QAdd from './QAdd/QAdd.jsx';
import dummyData from '../dummyData.js';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      productID: 0,
      productData: {},
      questions: [],
      answers: [],
      filtered: [],
      search: '',
      count: 2
    }

    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.updateHelpfulQ = this.updateHelpfulQ.bind(this);
    this.updateHelpfulA = this.updateHelpfulA.bind(this);
    this.reportA = this.reportA.bind(this);
  }

  componentDidMount() {
    let productID = '?product_id=14931';
    let qData = {};

    axios.get('qa/questions/' + productID)
    .then(questions => {
      qData = questions.data;
    })
    .then(()=> {
      this.setState({
        productID: qData.product_id,
        productData: qData,
        questions: qData.results
      })
    })
    // .catch(err =>{
    //   console.log(err);
    // })
  }

  dynamicSearch(search) {
    this.setState({
      search: search
    })

    if (search.length >= 3) {
      let filtered = this.state.questions.filter(question => question.question_body.toLowerCase().includes(search.toLowerCase()));

      this.setState({
        filtered: filtered
      })
    }
  }

  getQuestions() {
    let qData = {};
    let productID = `?product_id=${this.state.productID}`;

    axios.get('qa/questions/' + productID)
      .then(questions => {
        qData = questions.data;
      })
      .then(() => {
        this.setState({
          productID: qData.product_id,
          productData: qData,
          questions: qData.results
        })
      })
  }

  addQuestion(questionForm) {
    let productID = { product_id: Number(this.state.productID) };
    let data = Object.assign(questionForm, productID);

    axios.post('/qa/questions/', data)
      .then((res) => {
        console.log(res);
        this.getQuestions();
      })
      .catch(err => {
        console.log(err);
      })
  }

  addAnswer(questionID, answerForm) {
    console.log(questionID, answerForm);

    axios.post(`/qa/questions/${questionID}/answers`, answerForm)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.getQuestions();
      })
  }

  getAnswers(questionID) {
    let aData = {};

    axios.get(`/qa/questions/${questionID}/answers`)
      .then(answers => {
        aData = answers.data;
        console.log(aData);
      })
      .then(() => {
        this.setState({
          answers: aData.results
        })
      })
  }

  updateHelpfulQ(questionID) {
    axios.put(`/qa/questions/${questionID}/helpful`, { question_helpfulness: 1 })
      .then(() => {
        this.getQuestions();
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateHelpfulA(answerID) {
    axios.put(`/qa/answers/${answerID}/helpful`, { answer_helpfulness: 1 })
      .then(() => {
        this.getQuestions();
      })
      .catch(err => {
        console.log(err);
      })
  }

  reportA(answerID) {
    axios.put(`/qa/answers/${answerID}/report`, { reported: true })
      .then(() => {
        this.getQuestions();
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h4>Questions & Answers</h4>
          <SearchBar dynamicSearch={this.dynamicSearch} />
        </div>

        <div className="body">
          <QList
            qData={this.state.filtered.length > 0 ? this.state.filtered : this.state.questions}
            aData={this.state.answers}
            getAnswers={this.getAnswers}
            addAnswer={this.addAnswer}
            updateHelpfulQ={this.updateHelpfulQ}
            updateHelpfulA={this.updateHelpfulA}
            reportA={this.reportA}
          />
        </div>

        <div className="footer">
          <MoreQ />
          <QAdd addQ={this.addQuestion}/>
        </div>
      </div>
    )
  }
}

export default Questions;
