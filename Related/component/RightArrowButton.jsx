import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class RightArrowButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

    let width = document.getElementById('productCard0').offsetWidth + 10;
    document.getElementById('relatedContainer').scrollLeft += width;

    // let containerWidth = document.getElementById('relatedContainer').scrollWidth;

    // console.log('containerWidth: ', containerWidth);
  }

  render () {
    return (
      <button className={styles.rightArrowButton} onClick={this.handleClick} aria-label="Scroll Right">
          <i className={styles.arrowRight}></i>
      </button>
    )
  }
}

export default RightArrowButton;