import React from 'react';
import AModal from './AModal.jsx';
import sidebar from '../SideBar.module.css';

class AAdd extends React.Component {
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
    // console.log(this.props)
    return(
      <div id="addAnswerDiv">
        <button id={sidebar.['addAnswer-btn']} onClick={this.showModal}>Add Answer</button>
        <AModal
          show={this.state.show}
          close={this.hideModal}
          addAnswer={this.props.addAnswer}
          questionID={this.props.questionID}
          questionBody={this.props.questionBody}
          productName={this.props.productName}
        />
      </div>
    )
  }
};

export default AAdd;