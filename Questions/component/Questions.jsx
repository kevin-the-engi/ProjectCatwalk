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
      answers: []
    }

    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  }

  componentDidMount() {
    this.setState({
      questions: dummyData.results
    })
  }

  addQuestion(questionData) {
    console.log(questionData);
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
