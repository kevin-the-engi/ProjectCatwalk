import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/Questions.css';
import SearchBar from './SearchBar.jsx';
import QList from './QuestionList/QList.jsx';
import MoreQ from './MoreQ.jsx';
import QAdd from './QAdd.jsx';
import dummyData from '../dummyData.js';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      answers: []
    }
  }

  componentDidMount() {
    this.setState({
      questions: dummyData.results
    })
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
          <QAdd />
        </div>
      </div>
    )
  }
}

export default Questions;
