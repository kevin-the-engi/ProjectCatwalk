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
      questions: [],
      answers: [],
      filtered: []
    }

    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.updateHelpfulQ = this.updateHelpfulQ.bind(this);
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
        questions: qData.results
      })
    })
    .catch(err =>{
      console.log(err);
    })
  }

  dynamicSearch(search) {
    if (search.length >= 3) {
      let filtered = this.state.questions.filter(question => question.question_body.toLowerCase().includes(search.toLowerCase()));

      this.setState({
        filtered: filtered
      })
    } else {
      this.setState({
        filtered: []
      })
    }
  }

  getQuestions(questions) {
    console.log(questions);
  }

  addQuestion(questionForm) {
    let productID = { product_id: this.state.productID};
    let data = Object.assign(questionForm, productID);

    axios.post('/qa/questions', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  addAnswer(questionID, answerForm) {
    console.log(answerData);

    axios.post(`/qa/questions/:question_id=${questionID}/answers`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getAnswers(questionID) {
    let aData = {};

    axios.get(`/qa/questions/?question_id=${questionID}`)
      .then(answers => {
        aData = answers.data;
      })
      .then(() => {
        this.setState({
          answers: aData.results
        })
      })
  }

  updateHelpfulQ() {

    axios.put(`/qa/questions/:question_id=${id}/helpful`)
      .then(res => {
        console.log(res);
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
            getAnswers={this.getAnswers}
            updateHelpfulQ={this.updateHelpfulQ}
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
