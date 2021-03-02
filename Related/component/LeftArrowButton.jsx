import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class LeftArrowButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        document.getElementById('relatedContainer').scrollLeft -= 358;
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