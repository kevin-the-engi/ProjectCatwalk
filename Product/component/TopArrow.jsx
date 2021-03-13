import React from 'react';
import styles from './PGallery.module.css';

class TopArrow extends React.Component {
    constructor(props) {
      super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      if(document.getElementById('thumbnails').scrollTop > 0) {
      document.getElementById('thumbnails').scrollTop -= 78;
      }
      if(document.getElementById('thumbnails').scrollTop <= 78) {
        document.getElementById('arrowTop').className = styles.hide;
      }
    }

    render () {
        return (
            <button id="topArrow" className={styles.topArrow} onClick={this.handleClick}>
              <i id="arrowTop" className={styles.hide}></i>
            </button>
        )
    }
}

export default TopArrow;