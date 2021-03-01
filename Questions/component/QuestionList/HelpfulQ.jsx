import React from 'react';
import styles from '../../css/HelpfulQ.css';

class HelpfulQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    this.props.updateHelpfulQ();

    this.setState({
      show: false
    })
  }

  render() {
    console.log(this.props);
    const display = this.state.show ? 'helpful display-on' : 'helpful display-off';

    return(
      <div>
        <span>Helpful?</span>
        <button className={display} onClick={this.handleClick}>Yes</button>
        <span>({this.props.helpful})</span>
      </div>
    )
  }
}

export default HelpfulQ