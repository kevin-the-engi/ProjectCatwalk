import React from 'react';
import styles from '../css/QAdd.css';

class QAdd extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
  }

  render() {
    return(
      <button id="QAdd" onClick={this.handleClick}><h3>Add a Question</h3></button>
    )
  }
};

export default QAdd;