import React from 'react';
import styles from '../../css/QAdd.css';
import QModal from './QModal.jsx';

class QAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({
      show: true
    })
  }

  hideModal() {
    this.setState({
      show: false
    })
  }

  render() {
    return(
      <div id="QAdd-div">
        <button id="QAdd-btn" onClick={this.showModal}><h3>Add a Question</h3></button>
        <QModal show={this.state.show} close={this.hideModal} addQ={this.props.addQ} />
      </div>
    )
  }
};

export default QAdd;