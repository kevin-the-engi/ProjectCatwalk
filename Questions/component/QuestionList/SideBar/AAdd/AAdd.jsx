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
    return(
      <div id="AAdd-div">
        <button id={sidebar.['AAdd-btn']} onClick={this.showModal}>Add Answer</button>
        <AModal show={this.state.show} close={this.hideModal} addA={this.props.addA} />
      </div>
    )
  }
};

export default AAdd;