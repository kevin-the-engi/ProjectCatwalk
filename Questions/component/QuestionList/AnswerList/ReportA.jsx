import React from 'react';
import styles from '../SideBar/SideBar.module.css';

class ReportA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reported: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.reportA(this.props.questionID, this.props.answerID);

    this.setState({
      reported: true
    })
  }

  render() {
    return(
      <div className="reportContainer">
        {!this.state.reported ?
          <button className={styles['report-btn']} onClick={this.handleClick}>Report</button> :
          <span><sub>Reported</sub></span>}
      </div>
    )
  }
}

export default ReportA;