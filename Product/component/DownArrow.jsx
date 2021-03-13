import React from 'react';
import styles from './PGallery.module.css';

class DownArrow extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // find number of thumbnails math and when we reach the end of that don't do this..
        var maxScrollHeight = document.getElementById('thumbnails').scrollHeight
        if(document.getElementById('thumbnails').scrollTop !== maxScrollHeight) {
        document.getElementById('thumbnails').scrollTop += 78;
        }
        document.getElementById('arrowTop').className = styles.arrowTop;
    }

    render () {
        return (
            <button className={styles.downArrow} onClick={this.handleClick}>
              <i id="arrowDown" className={styles.arrowDown}></i>
            </button>
        )
    }
}

export default DownArrow;

