import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.jsx';

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
      </div>
    )
  }
}

ReactDOM.render(<Questions />, document.getElementById('app'));