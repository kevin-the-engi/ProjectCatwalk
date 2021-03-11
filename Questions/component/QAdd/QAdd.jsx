import React from 'react';
import styles from '../../css/Buttons.module.css';
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
      <div id="footer-QAdd">
        <button id={styles["QAdd-btn"]} onClick={this.showModal}>
          ADD QUESTION +
        </button>
        <QModal
          show={this.state.show}
          close={this.hideModal}
          addQuestion={this.props.addQuestion}
          productName={this.props.productName}
        />
      </div>
    )
  }
};

export default QAdd;