import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class RightArrowButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollCount: 0,
      maxScrollCount: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // let containerId;
    //   if (this.props.gallery === 'related') {
    //     containerId = 'relatedContainer'
    //   }
    let width = document.getElementById('productCard0').offsetWidth + 10;
    document.getElementById('relatedContainer').scrollLeft += width;
    // this.props.scrollRight();
  }

  render () {
    return (  
      // <button className={this.props.scrollCount !== this.props.maxScrollCount ? styles.rightArrowButton : styles.rightArrowButtonHide} onClick={this.handleClick} aria-label="Scroll Right">
      <button className={styles.rightArrowButton} onClick={this.handleClick} aria-label="Scroll Right">
          <i className={styles.arrowRight}></i>
      </button>
    )
  }
}

export default RightArrowButton;