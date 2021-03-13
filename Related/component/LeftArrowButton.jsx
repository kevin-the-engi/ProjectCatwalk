import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class LeftArrowButton extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      // let containerId;
      // if (this.props.gallery === 'related') {
      //   containerId = 'relatedContainer'
      // }
      let width = document.getElementById('productCard0').offsetWidth + 10;
      document.getElementById('relatedContainer').scrollLeft -= width;
      // this.props.scrollLeft();
    }

    render () {

      return (      
        // <button className={this.props.scrollCount !== 0 ? styles.leftArrowButton : styles.leftArrowButtonHide} onClick={this.handleClick} aria-label="Scroll Left">
        <button className={styles.leftArrowButton} onClick={this.handleClick} aria-label="Scroll Left">
          <i className={styles.arrowLeft}></i>
        </button> 
      )
    }
}

export default LeftArrowButton;