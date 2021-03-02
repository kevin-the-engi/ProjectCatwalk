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
      answers: []
    }

    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({
      productID: Number(dummyData.product_id),
      questions: dummyData.results
    })
  }

  getQuestions() {

  }

  addQuestion(questionForm) {
    let product_id = { product_id: this.state.productID}
    let data = Object.assign(questionForm, product_id);

    axios.post('/qa/questions', data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  addAnswer(answerData) {
    console.log(answerData);
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h4>Questions & Answers</h4>
          <SearchBar />
        </div>

        <div className="body">
          <QList qData={this.state.questions} />
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
