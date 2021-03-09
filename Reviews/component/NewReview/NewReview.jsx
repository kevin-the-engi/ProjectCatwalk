import React from 'react';
import CharList from '../CharList/CharList.jsx'
import NewReviewStars from '../NewReviewStars/NewReviewStars.jsx'

import styles from './NewReview.module.css'
import axios from 'axios'

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props && this.props.metaData && this.props.metaData.product_id && Number(this.props.metaData.product_id) || '',
      rating: '',
      summary: '',
      body: '',
      recommend: '',
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      alert: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.changeRecommend = this.changeRecommend.bind(this);
    this.changeStars = this.changeStars.bind(this);
    this.updateChars = this.updateChars.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleInput(e) {
   var field = e.target.name;
   this.setState({
     [field] : e.target.value
   })
  }

  changeRecommend(e) {
    if (e.target.id === "recommendYes")
    this.setState({
      recommend: true
    })
    if (e.target.id === "recommendNo")
    this.setState({
      recommend: false
    })
   }

   changeStars(rating) {
     this.setState({
       rating: Number(rating)
     })
   }

   updateChars(chars) {
     this.setState({
       characteristics: chars
     })
   }

   validateForm() {
     var validated = false;
     if (this.state.summary.length < 61 &&
      this.state.summary.length !== 0 &&
      this.state.body.length > 49 &&
      this.state.body.length !== 0 &&
      this.state.body.length < 999 &&
      this.state.email.length < 61 &&
      this.state.email.length !==0 &&
      this.state.name.length < 61 &&
      this.state.rating !== '' &&
      this.state.recommend !== '' &&
      this.state.chars !== {}) {
        validated = true;
     }
     if (!validated) {
      this.setState({
        alert: true
      })
     }
     return validated;
   }

   handleSubmit(e) {
    e.preventDefault();
    var params = {
      product_id: this.state.product_id,
      rating: this.state.rating,
      summary: this.state.summary,
      body: this.state.body,
      recommend: this.state.recommend,
      name: this.state.name,
      email: this.state.email,
      photos: this.state.photos,
      characteristics: this.state.characteristics
    }
    if (this.validateForm()) {
      this.props.handleClick();
      this.props.handlePostReview(params);
    }
   }

  render() {
    console.log('newrev', this.props)

    return (
      <div className={styles.modal}>
        <div className={styles.modalmain}>
          <div className={styles.title}>Write Your Review About the {this.props.productName}</div>
          <form id='formSubmit' className={styles.form} onSubmit={this.handleSubmit}>
            <div className={styles.product}>
              <div className={styles.productExp}>PRODUCT EXPERIENCE</div>
              <div className={styles.productContainer}>
                <div className={styles.ratingContainer}>
                  Your Overall Rating
                  <NewReviewStars changeStars={this.changeStars}/>
                </div>
                <div className={styles.recommend}>
                  <div>Would you recommend this product?</div>
                  <div className={styles.recommendContainer}>
                    <div className={styles.recommendButtons}  onChange={this.changeRecommend}>
                      <input type="radio" name="recommend" id="recommendYes" className={styles.recommendButton} checked={this.state.recommend === true} required></input>
                      <div className={styles.recommendLabel}>
                        <label>Yes</label>
                      </div>
                    </div>
                    <div className={styles.recommendButtons}  onChange={this.changeRecommend}>
                      <input type="radio" name="recommend" id="recommendNo" className={styles.recommendButton} checked={this.state.recommend === false} required></input>
                      <div className={styles.recommendLabel}>
                        <label className={styles.recommendLabel}>No</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.chars}>
                <CharList metaData={this.props.metaData} updateChars={this.updateChars}/>
              </div>
            </div>
            <div className={styles.reviews}>
              <div className={styles.yourReview}>YOUR REVIEW</div>
              <div className={styles.reviewContainer}>
                <div className={styles.summary}>
                  <label>Review Summary</label>
                  <textarea className={styles.summaryInput} id="summary" type="text" name="summary" placeholder="Example: Best purchase ever!" value={this.state.summary} maxLength="60" onChange={this.handleInput} required></textarea>
                </div>
                <div className={styles.body}>
                  <label>Review Body</label>
                  <textarea className={styles.bodyInput} id="body" type="text" name="body" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" value={this.state.body} onChange={this.handleInput} required></textarea>
                </div>
              </div>
            </div>
            <div className={styles.persInfoContainer}>
              <div className={styles.personalInfo}>PERSONAL INFORMATION</div>
              <div className={styles.infoContainer}>
                <div className={styles.infoChild}>
                  <label>
                    What is your nickname?
                    <textarea className={styles.nickname} id="name" type="text" name="name" maxLength="60" placeholder="Example: jackson11!" value={this.state.name} onChange={this.handleInput} required></textarea>
                  </label>
                  <div className={styles.privacy}>
                    For privacy reasons, do not use your full name or email address.
                  </div>
                </div>
                <div className={styles.emailContainer}>
                  <label>
                    Your email
                    <textarea className={styles.email} id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput} required></textarea>
                  </label>
                  <div className={styles.privacy}>
                    For authentication reasons, you will not be emailed.
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div className={styles.terms}>By submitting a review you agree to our Terms and Conditions</div>
                <button className={styles.submitButton}>SUBMIT REVIEW</button>
              </div>
              {this.state.alert ? <div className={styles.alert}> Please fill out all required fields</div> : null}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NewReview;
