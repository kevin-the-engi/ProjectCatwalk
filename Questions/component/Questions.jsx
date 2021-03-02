import React from 'react';
import ReactDOM from 'react-dom';
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
      questions: [],
      answers: [],
      filtered: []
    }

    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
    this.getAnswers = this.getAnswers.bind(this);
    this.updateHelpfulQ = this.updateHelpfulQ.bind(this);
  }

  componentDidMount() {
    this.setState({
      questions: dummyData.results
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

  addQuestion(questionData) {
    console.log(questionData);
  }

  addAnswer(answerData) {
    console.log(answerData);
  }

  getAnswers(questionID) {

  }

  updateHelpfulQ() {

  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h4>Questions & Answers</h4>
          <SearchBar dynamicSearch={this.dynamicSearch} />
        </div>

        <div className="body">
          <QList qData={this.state.filtered.length > 0 ? this.state.filtered : this.state.questions} />
          <QList
            qData={this.state.questions}
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
