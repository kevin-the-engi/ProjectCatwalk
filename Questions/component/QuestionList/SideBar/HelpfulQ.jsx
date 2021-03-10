import React from 'react';
import styles from './SideBar.module.css';

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
    this.props.updateHelpfulQ(this.props.questionID);

    this.setState({
      show: false
    })
  }

  render() {
    // console.log(this.props);
    const display = this.state.show ? `${styles['helpful-btn']} ${styles['display-on']}` : `${styles['helpful-btn']} ${styles['display-off']}`;

    return(
      <div className="helpContainer">
        <span className={styles.text}>Helpful?</span>
        <button className={display} onClick={this.handleClick}>Yes</button>
        <span className={styles.number}>({this.props.helpful})</span>
      </div>
    )
  }
}

export default HelpfulQ