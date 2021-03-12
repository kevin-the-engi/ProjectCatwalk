import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';
import ComparisonModal from './ComparisonModal.jsx';

class CompareButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(event) {
    this.setState({show: true});
    event.stopPropagation();
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <div className={styles.starContainer}>
        <span className={styles.star} onClick={this.showModal}>☆</span>
        <ComparisonModal hideModal={this.hideModal} show={this.state.show} currentItem={this.props.currentItem} relatedItem={this.props.relatedItem}/>
      </div>
    )
  }
}

export default CompareButton;