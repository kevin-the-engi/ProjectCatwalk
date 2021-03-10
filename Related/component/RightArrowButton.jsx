import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class RightArrowButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // document.getElementById('relatedContainer').scrollLeft += 358;
        let width = document.getElementById('productCard0').offsetWidth;
        document.getElementById('relatedContainer').scrollLeft += width;
    }

    render () {
        return (
          <button className={styles.rightArrowButton} onClick={this.handleClick}>
              <i className={styles.arrowRight}></i>
          </button>
        )
    }
}

export default RightArrowButton;