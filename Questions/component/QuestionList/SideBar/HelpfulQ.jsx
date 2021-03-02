import React from 'react';
import styles from './HelpfulQ.module.css';
import sidebar from './SideBar.module.css';

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
    // console.log(this.props);
    const display = this.state.show ? `${sidebar.helpful} ${styles['display-on']}` : `${sidebar.helpful} ${styles['display-off']}`;

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