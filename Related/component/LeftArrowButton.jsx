import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class LeftArrowButton extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.state = {
        show: true
      }
    }

    handleClick() {
      let width = document.getElementById('productCard0').offsetWidth + 10;
      document.getElementById('relatedContainer').scrollLeft -= width;
     
    }

    render () {

      return (      
        <button className={this.state.show ? styles.leftArrowButton : styles.leftArrowButtonHide} onClick={this.handleClick} aria-label="Scroll Left">
          <i className={styles.arrowLeft}></i>
        </button> 
      )
    }
}

export default LeftArrowButton;