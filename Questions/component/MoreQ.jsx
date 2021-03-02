import React from 'react';
import styles from '../css/MoreQ.css';

class MoreQ extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked')
  }

  render() {
    return(
      <button id="MoreQ" onClick={this.handleClick}><h3>More Answered Questions</h3></button>
    )
  }
};

export default MoreQ;