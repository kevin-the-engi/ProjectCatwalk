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
      allQuestions: [],
      qTotal: 0,
      qCount: 2,
      hide: true,
      match: true,
      height: 0,
      expand: false
    }

    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.getProductName = this.getProductName.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.updateHelpfulQ = this.updateHelpfulQ.bind(this);
    this.moreQ = this.moreQ.bind(this);
    this.setOverflow = this.setOverflow.bind(this);
    this.expandA = this.expandA.bind(this);
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
    if (search.length >= 3) {
      axios.get(`/qa/questions/search/${this.props.productId}/${search}`)
        .then(filtered => {
          if (filtered.data.length !== 0) {
            this.setState({
              questions: filtered.data,
              qTotal: filtered.data.length,
              match: true
            })

            this.setOverflow();
          } else {
            this.setState({
              match: false
            })

            this.setOverflow();
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
    let query = `?product_id=${productID}&page=1&count=100`;

    axios.get('/qa/questions/' + query)
      .then(questions => {
        let cutQuestions = questions.data.results.slice(0, this.state.qCount);

        this.setState({
          productData: questions.data,
          questions: cutQuestions,
          allQuestions: questions.data.results,
          qTotal: questions.data.results.length
        }, () => {
          if (this.state.qTotal !== 0 && this.state.qCount < this.state.qTotal) {
            this.setState({
              hide: false
            })
          }

          this.setOverflow();
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  addQuestion(questionForm) {
    let productID = { product_id: Number(this.state.productID) };
    let data = Object.assign(questionForm, productID);

    axios.post('/qa/questions/', data)
      .then((res) => {
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
      qCount: this.state.qCount,
    })

    if (this.state.qCount === 4) {
      this.setState({
        height: document.getElementById('Q&AList').clientHeight
      })
    }

    this.setOverflow();
    this.getQuestions(this.props.productId);
  }

  setOverflow() {
    if (this.state.qCount >= 4 && this.state.questions.length >= 4) {
      let divHeight = document.getElementById('Q&AList').clientHeight;

      document.getElementById('Q&AList').style.height = divHeight;
      document.getElementById('Q&AList').setAttribute("class", "overFlow");
    } else {
      document.getElementById('Q&AList').style.height = "auto";
      document.getElementById('Q&AList').removeAttribute("overFlow");
    }
  }

  expandA(expand) {
    this.setState({
      expand: expand
    })
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
                expandA={this.expandA}
                isExpand={this.state.expand}
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
