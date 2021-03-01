import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';
import QList from './QuestionList/QList.jsx';
import dummyData from '../dummyData.js';

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Questions & Answers</h1>
        <SearchBar />
        <QList qData={dummyData.results} />
      </div>
    )
  }
}

export default Questions;
