import React from 'react';
import styles from '../../css/HelpfulQ.css';

class HelpfulQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      click: true
    })
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <span>Helpful?</span>
        <button onClick={this.handleClick}>Yes</button>
        <span>({this.props.helpful})</span>
      </div>
    )
  }
}

export default HelpfulQ