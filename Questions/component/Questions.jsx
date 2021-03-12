import React from 'react';
import axios from 'axios';
import styles from '../css/Questions.css';
import SearchBar from './SearchBar/SearchBar.jsx';
import QList from './QuestionList/QList.jsx';
import MoreQ from './MoreQ/MoreQ.jsx';
import QAdd from './QAdd/QAdd.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: this.props.productId,
      productName: '',
      productData: {},
      filtered: [],
      questions: [],
      qTotal: 0,
      qCount: 2,
      hide: true,
      match: true
    }

    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.getProductName = this.getProductName.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.getTotalQ = this.getTotalQ.bind(this);
    this.updateHelpfulQ = this.updateHelpfulQ.bind(this);
    this.moreQ = this.moreQ.bind(this);
  }

  componentDidMount() {
    this.getProductName();
    this.getQuestions(this.props.productId);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.productId !== prevProps.productId) {
      this.setState((state, props) => {
        productID: this.props.productId
      })
      this.getProductName();
      this.getQuestions(this.props.productId);
    }
  }

  dynamicSearch(search) {
    let qCopy = this.state.questions.slice();

    if (search.length >= 3) {
      axios.get(`/qa/questions/search/${this.props.productId}/${search}`)
        .then(filtered => {
          if (filtered.data.length !== 0) {
            this.setState({
              questions: filtered.data,
              qTotal: filtered.data.length,
              match: true
            })
          } else {
            this.setState({
              match: false
            })
          }
        })
    } else {
      this.getQuestions();
      this.setState({
        match: true
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

  getQuestions(productID = this.state.productID) {
    let query = `?product_id=${productID}&page=1&count=${this.state.qCount}`;

    axios.get('/qa/questions/' + query)
      .then(questions => {
        this.setState({
          productData: questions.data,
          questions: questions.data.results
        })
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.getTotalQ();
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

  getTotalQ() {
    let query = `?product_id=${this.state.productID}&page=1&count=100`;

    axios.get('/qa/questions' + query)
      .then((questions) => {
        this.setState({
          qTotal: questions.data.results.length
        })
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        if (this.state.qTotal !== 0 && this.state.qCount < this.state.qTotal) {
          this.setState({
            hide: false
          })
        }
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

    if (this.state.qCount >= this.state.qTotal) {
      this.setState({
        hide: true
      })
    } else {
      this.setState({
        hide: false
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

    this.getQuestions(this.props.productId);
  }

  render() {
    return (
      <div className="main-container">
        <div className="main-header">
          <span className="main-title">QUESTIONS & ANSWERS</span>
          <SearchBar dynamicSearch={this.dynamicSearch} />
        </div>

        <div className="main-body">
          {this.state.match ?
            (this.state.qTotal !== 0 ?
              <QList
                qData={this.state.questions}
                updateHelpfulQ={this.updateHelpfulQ}
                productName={this.state.productName}
              />  : <i>There are no questions for this product. Be the first to ask!</i>)
              : <i>There are no matches. Try again.</i>
          }
        </div>

        <div className="main-footer">
          {this.state.hide ?  null : <MoreQ moreQ={this.moreQ} />}

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
