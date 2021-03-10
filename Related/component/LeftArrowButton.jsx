import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class LeftArrowButton extends React.Component {
    constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      let width = document.getElementById('productCard0').offsetWidth;
      // console.log('document: ', document.getElementsByClassName('.productCard'));
      // console.log('width: ', width);
      // console.log('width of productCard1: ', width);
      // console.log('width of productCard0: ', document.getElementById('productCard0').offsetWidth)
      // console.log('width of productCard2: ', document.getElementById('productCard2').offsetWidth)
      document.getElementById('relatedContainer').scrollLeft -= width;
      // document.getElementById('relatedContainer').scrollLeft -= 358;
    }

    render () {
      return (      
        <button className={styles.leftArrowButton} onClick={this.handleClick}>
          <i className={styles.arrowLeft}></i>
        </button> 
      )
    }
}

export default LeftArrowButton;