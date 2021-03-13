import React from 'react';
import LeftArrowButton from './LeftArrowButton.jsx';
import RightArrowButton from './RightArrowButton.jsx';
import styles from './css_modules/RelatedGallery.module.css';

class CarouselNavigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      maxScrollCount: '',
      scrollCount: 0
    }
    this.scrollRight = this.scrollRight.bind(this);
    this.scrollLeft = this.scrollLeft.bind(this);
  }

  /*
    1. manage state of maxScrollCount, leftScrollCount and rightScrollCount in this component
    2. send the states down to each of the Left and Right Arrow components to facilitate conditional rendering of arrows
    3. update state of lettScrollCount and rightScrollCount based on click handlers
    */

  scrollRight() {
    let width = document.getElementById('productCard0').offsetWidth + 10;
    let scrollWidth = document.getElementById('relatedContainer').scrollWidth;
    let clientWidth = document.getElementById('relatedContainer').clientWidth;
    let maxCount = Math.ceil((scrollWidth - clientWidth) / width);
    this.setState({maxScrollCount: maxCount});

    let count = this.state.scrollCount;
    count++;
    this.setState({scrollCount: count})
  }

  scrollLeft() {
    let count = this.state.scrollCount;
    count--;
    this.setState({scrollCount: count})
  }

  render() {
    return (
      <div className={styles.navigatorContainer}>
        <LeftArrowButton maxScrollCount={this.state.maxScrollCount} scrollCount={this.state.scrollCount} scrollLeft={this.scrollLeft}/>
        <RightArrowButton maxScrollCount={this.state.maxScrollCount} scrollCount={this.state.scrollCount} scrollRight={this.scrollRight}/>
      </div>
    )
  }
}

export default CarouselNavigator;