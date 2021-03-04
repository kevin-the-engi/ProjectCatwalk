import React from 'react'
// import ReactDOM from 'react-dom'
import ReviewsList from '../ReviewsList/ReviewsList.jsx'
import dummyData from '../reviewData.js'
import metaData from '../reviewMetaData.js'
import WriteNewReview from '../WriteNewReview/WriteNewReview.jsx'
import RatingBreakdown from '../RatingBreakdown/RatingBreakdown.jsx'
import styles from './Reviews.module.css'
import axios from 'axios'


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: [],
      metaData: {},
      recommended: {true: '', false: ''},
      ratings: {1: '', 2: '', 3: '', 4: '', 5: ''}
    }
    this.handlePostReview=this.handlePostReview.bind(this);
    this.handleHelpful=this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
  }
  componentDidMount() {
    axios.get('/reviews', {
      params: {
        product_id: 14931
      }
    })
    .then((response) => {
      this.setState({
        reviewData: response.data.results,
      })
    })
    .catch((err) => {
      console.log('error getting reviews from api')
    })

    axios.get('/reviews/meta', {
      params: {
        product_id: 14931
      }
    })
    .then((response) => {
      this.setState({
        metaData: response.data,
        recommended: response.data.recommended,
        ratings: response.data.ratings
      })
    })
    .catch((err) => {
      console.log('error getting meta data from reviews from api')
    })
  }

  handlePostReview(params) {
    axios.post('/reviews', params)
    .then(function (response) {
      console.log('successfully posted review from app');
    })
    .catch(function (error) {
      console.log(error);
    });
   }

   handleHelpful(id) {
    axios.put('/reviews/', {
      review_id: id
    })
    .then(function (response) {
      console.log('successfully updated review as helpful from app');
    })
    .catch(function (error) {
      console.log(error);
    });
   }

   handleReport(id) {
    axios.put('/reviews/report', {
      review_id: id
    })
    .then(function (response) {
      console.log('successfully reported review from app');
    })
    .catch(function (error) {
      console.log(error);
    });
   }


  render() {
    return (
      <div>
      <div className={styles.title}>RATINGS & REVIEWS</div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.ratingBreakdown}>
            <RatingBreakdown recommended={this.state.recommended} ratings={this.state.ratings}/>
          </div>
          <div>
            [product breakdown]
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.sortBar}>
            5 reviews, sorted by relevance
          </div>
          <div id="reviews">
            <ReviewsList reviewList={this.state.reviewData} handleHelpful={this.handleHelpful} handleReport={this.handleReport}/>
          </div>
          <div className={styles.footer}>
            <WriteNewReview metaData={this.state.metaData} handlePostReview={this.handlePostReview}/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Reviews;

