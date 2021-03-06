import React from 'react'
import NewReview from '../NewReview/NewReview.jsx'
import styles from './WriteNewReview.module.css'


class WriteNewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // e.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className={styles.footer}>
        <button className={styles.moreReviews}>MORE REVIEWS</button>
        <button id="addReview" className={styles.addReview} onClick={this.handleClick}>ADD A REVIEW +</button>
        <div>
          {this.state.clicked ? <NewReview metaData={this.props.metaData} handlePostReview={this.props.handlePostReview} handleClick={this.handleClick}/> : null}
        </div>
      </div>
    )
  }
}

export default WriteNewReview;