import React from 'react'
import ReviewsList from '../ReviewsList/ReviewsList.jsx'
import WriteNewReview from '../WriteNewReview/WriteNewReview.jsx'
import RatingBreakdown from '../RatingBreakdown/RatingBreakdown.jsx'
import ProductBreakdown from '../ProductBreakdown/ProductBreakdown.jsx'
import styles from './Reviews.module.css'
import axios from 'axios'


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      reviewData: [],
      metaData: {},
      recommended: {true: '', false: ''},
      ratings: {1: '', 2: '', 3: '', 4: '', 5: ''},
      view: 2,
      productName: '',
      sort: 'relevance',
      dropDown: true,
      dropDownContent: true
    }
    this.handlePostReview=this.handlePostReview.bind(this);
    this.handleHelpful=this.handleHelpful.bind(this);
    this.handleReport = this.handleReport.bind(this);
    this.handleViewMore = this.handleViewMore.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
  }

  componentDidMount() {
    this.getData(this.props.productId);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.productId !== prevProps.productId) {
      this.setState((state, props) => {
        productId: this.props.productId
      })
      this.getData(this.props.productId);
    }
  }

  getData(id) {
    axios.get('/reviews/', {
      params: {
        product_id: id,
        sort: 'relevant'
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
        product_id: id
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
      console.log('error getting meta data from reviews from api', err)
    })

    axios.get('/products/', {
      params: {
        product_id: id
      }
    })
    .then((response) => {
        this.setState({
         productName: response.data.name
        })
    })
    .catch((err) => {
      console.log('error getting product name from api')
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
      console.log('review was reported')
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleViewMore() {
    var currentView = this.state.view;
    var updatedView = currentView + 2;
    this.setState({
      view: updatedView
    })
  }

  handleSort(e) {
    var sortType = e.target.textContent;
    this.setState({
      sort: sortType,
      dropDown: !this.state.dropDown,
      dropDownContent: !this.state.dropDownContent
    })
    if (e.target.textContent === 'relevance') {
      sortType = 'relevant'
    }
    if (e.target.textContent === 'helpfulness') {
      sortType = 'helpful'
    }

    axios.get('/reviews/', {
      params: {
        product_id: this.state.productId,
        sort: sortType
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
  }

  displayDropdown() {
   this.setState({
    dropDown: !this.state.dropDown,
    dropDownContent: !this.state.dropDownContent
   })
  }

  render() {
    var reviewsToRender = this.state.reviewData.slice(0, (this.state.view));
    var dropDown;
    var dropDownContent;
    if (this.state.dropDownContent) {
      dropDownContent = 'dropDownContentClose';
    } else {
      dropDownContent = 'dropDownContent';
    }
    if (this.state.dropDown) {
      dropDown = 'dropDownClickClose';
    } else {
      dropDown = 'dropDownClick';
    }

    if (this.state.reviewData.length === 0) {
      return null;
    }

    return (
      <div>
        <div id="overview_to_reviews" className={styles.title}>RATINGS & REVIEWS</div>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.ratingBreakdown}>
              <RatingBreakdown recommended={this.state.recommended} ratings={this.state.ratings}/>
            </div>
            <div id="productBreakdown">
              <ProductBreakdown metaData={this.state.metaData}/>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.sortBar}>
              {this.state.reviewData.length} reviews, sorted by
              <div className={styles.drop}>
              <div className={styles[dropDown]} >
                <div className={styles.btnWithV}>
                  <button className={styles.dropbtn} onClick={this.displayDropdown}>{this.state.sort}</button>
                  <div className={styles.v}>▼</div>
                </div>
                <div className={styles[dropDownContent]}>
                  <span className={styles.sortoption} onClick={this.handleSort}>relevance</span>
                  <span className={styles.sortoption} onClick={this.handleSort}>newest</span>
                  <span className={styles.sortoption} onClick={this.handleSort}>helpfulness</span>
                </div>
              </div>
              </div>
            </div>
            <div id="reviews">
              <ReviewsList reviewList={reviewsToRender} handleHelpful={this.handleHelpful} handleReport={this.handleReport}/>
            </div>
            <div className={styles.footer}>
              <WriteNewReview handleViewMore={this.handleViewMore} metaData={this.state.metaData} productName={this.state.productName} handlePostReview={this.handlePostReview}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Reviews;
