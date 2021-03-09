import React from 'react';
import styles from './PGallery.module.css';

class DownArrow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        document.getElementById('thumbnails').scrollTop += 78;
    }

    render () {
        return (
            <button className={styles.downArrow} onClick={this.handleClick}>
              <i className={styles.arrowDown}></i>
            </button>
        )
    }
}

export default DownArrow;

