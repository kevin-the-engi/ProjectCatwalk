import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import QList from './QuestionList/QList.jsx';
import MoreQ from './MoreQ.jsx';
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
      <div>
        <h1>Questions & Answers</h1>
        <SearchBar />
        <QList qData={this.state.questions} />
        <MoreQ />
      </div>
    )
  }
}

export default Questions;
