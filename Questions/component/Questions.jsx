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
      productName: '',
      productData: {},
      questions: [],
      filtered: [],
      qCount: 2,
      showMore: true
    }

    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.getProductName = this.getProductName.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.updateHelpfulQ = this.updateHelpfulQ.bind(this);
    this.moreQ = this.moreQ.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
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

  getProductName() {
    axios.get(`/products/${this.state.productID}`)
      .then(productName => {
        this.setState({
          productName: productName.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  getQuestions() {
    let id = 14931;
    let productID = `?product_id=${id}&page=1&count=${this.state.qCount + 5}`;

    axios.get('/qa/questions/' + productID)
      .then(questions => {
        this.setState({
          productID: questions.data.product_id,
          productData: questions.data,
          questions: questions.data.results
        })
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.getProductName();
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

  updateHelpfulQ(questionID) {
    axios.put(`/qa/questions/${questionID}/helpful`, { question_helpfulness: 1 })
      .then(() => {
        this.getQuestions();
      })
      .catch(err => {
        console.log(err);
      })
  }

  moreQ() {
    this.state.qCount += 2;

    if (this.state.qCount > this.state.questions.length) {
      this.setState({
        showMore: false
      })
    }

    this.setState({
      qCount: this.state.qCount
    })

    if (this.state.qCount >= 4 && this.state.questions.length >= 4) {
      let divHeight = document.getElementById('Q&AList').clientHeight;

      document.getElementById('Q&AList').style.height = divHeight;
      document.getElementById('Q&AList').setAttribute("class", "overFlow");
    }

    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h4>Questions & Answers</h4>
          <SearchBar dynamicSearch={this.dynamicSearch} />
        </div>

        <div className="body">
          {this.state.questions.length !== 0 ?
            <QList
              qData={this.state.filtered.length > 0 ? this.state.filtered : this.state.questions}
              qCount={this.state.qCount}
              updateHelpfulQ={this.updateHelpfulQ}
              productName={this.state.productName}
            /> :
            <i>There are no questions for this product. Be the first to ask!</i>}
        </div>

        <div className="footer">
          {this.state.showMore ?
            <MoreQ moreQ={this.moreQ}/> : null}

          <QAdd
            addQuestion={this.addQuestion}
            productName={this.state.productName}
          />
        </div>
      </div>
    )
  }
}

export default Questions;
