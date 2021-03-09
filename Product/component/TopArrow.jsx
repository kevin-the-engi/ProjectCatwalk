import React from 'react';
import styles from './PGallery.module.css';

class TopArrow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          hide: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      document.getElementById('thumbnails').scrollTop -= 78;
      // if(document.getElementById('thumbnails').scrollTop <= 0) {
      //   this.setState({
      //     hide: true
      //   })
      // }
    }

    render () {
        return (
            <button id="topArrow" className={styles.topArrow} onClick={this.handleClick}>
              <i className={this.state.hide? styles.hide : styles.arrowTop}></i>
            </button>
        )
    }
}

export default TopArrow;