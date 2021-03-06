import React from 'react';
import styles from './IndividualReview.module.css';
import Stars from '../Stars/Stars.jsx'

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      report: false,
      review: ''
    }
      this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
      this.handleReportClick = this.handleReportClick.bind(this);
  }

  handleHelpfulClick(e) {
    e.preventDefault();
    this.setState({
      helpful: true
    })
    var reviewId = this.state.review;
    this.props.handleHelpful(reviewId)
  }

   handleReportClick(e) {
    e.preventDefault();
    this.setState({
      report: true
    })
    var reviewId = this.state.review;
    this.props.handleReport(reviewId)
   }

  componentDidMount() {
    this.setState({
      review: this.props.review.review_id
    })
  }

  render() {
    var date = this.props.review.date.slice(0, 10).split('-');
    var year = Number(date[0])
    var month = Number(date[1]) -1;
    var day = Number(date[2]) -1;
    var newDate = new Date(year, month, day)
    var formattedDate = new Intl.DateTimeFormat('en-US', {
      year:  'numeric',
      month: 'long',
      day:   'numeric',
    }).format(newDate)

    return (
      <div className={styles.individualReview}>
        <div className={styles.header}>
          <Stars rating={this.props.review.rating}/>
          <div className={styles.headerRight}>
            <div className={styles.reviewer_name}>
              {this.props.review.reviewer_name},
            </div>
            <div>
              {formattedDate}
            </div>
          </div>
        </div>
        <div className={styles.summary}>
          {this.props.review.summary}
        </div>
        <div className={styles.body}>
          {this.props.review.body}
        </div>
        <div className={styles.helpfulness}>
          Helpful?
          <div className={styles.helpfulYesButton} name={this.state.review} onClick={this.handleHelpfulClick}>
            Yes
          </div>
          <div>
          ({this.props.review.helpfulness}) |
          </div>
          <div name={this.state.review} onClick={this.handleReportClick}>
            Report
          </div>
        </div>
      </div>
    )
  }
}

export default IndividualReview;