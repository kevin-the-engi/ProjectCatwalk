import React from 'react'
// import ReactDOM from 'react-dom'
import ReviewsList from '../ReviewsList/ReviewsList.jsx'
import dummyData from '../reviewData.js'
import WriteNewReview from '../WriteNewReview/WriteNewReview.jsx'
import styles from './Reviews.module.css'


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: []
    }
  }
  componentDidMount() {
    this.setState({
      reviewData: dummyData.results
    })
  }

  render() {
    return (
      <div>
      <div className={styles.title}>RATINGS & REVIEWS</div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.ratingBreakdown}>
            rating breakdown
          </div>
          <div>
            product breakdown
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.sortBar}>
            Sort Bar
          </div>
          <div id="reviews">
            <ReviewsList reviewList={this.state.reviewData}/>
          </div>
          <div>
            <WriteNewReview/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Reviews;

// ReactDOM.render(
//   // insert your component here to test individually, but delete before merging
//   <Reviews />,
//   document.getElementById('app')
// )

