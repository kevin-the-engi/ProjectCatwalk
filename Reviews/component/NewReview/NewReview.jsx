import React from 'react';
import CharList from '../CharList/CharList.jsx'
import NewReviewStars from '../NewReviewStars/NewReviewStars.jsx'

import styles from './NewReview.module.css'
import axios from 'axios'

class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: Number(this.props.metaData.product_id),
      rating: '',
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {}
    }
    this.handleInput = this.handleInput.bind(this);
    this.changeRecommend = this.changeRecommend.bind(this);
    this.changeStars = this.changeStars.bind(this);
    this.updateChars = this.updateChars.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
   var field = e.target.name;
   this.setState({
     [field] : e.target.value
   })
  }

  changeRecommend(e) {
    e.preventDefault()
    if (e.target.name === "recommendYes")
    this.setState({
      recommend: true
    })
   }

   changeStars(e) {
    e.preventDefault()
     this.setState({
       rating: Number(e.target.name)
     })
   }

   updateChars(chars) {
     this.setState({
       characteristics: chars
     })
   }

   handleSubmit(e) {
    e.preventDefault();
    var params = this.state;
    this.props.handleClick();
    this.props.handlePostReview(params);
   }

  render() {
  console.log(this.state)
    return (
      <div className={styles.modal}>
        <div className={styles.modalmain}>
          <div className={styles.title}>Write Your Review About the Product</div>
          <form className={styles.form} onSubmit={this.handleSubmit}>
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
                    <div className={styles.recommendButtons}>
                      <input type="radio" name="recommendYes" className={styles.recommendButton} onClick={this.changeRecommend}></input>
                      <div className={styles.recommendLabel}>
                        <label>Yes</label>
                      </div>
                    </div>
                    <div className={styles.recommendButtons}>
                      <input type="radio" name="recommendNo" className={styles.recommendButton} onClick={this.changeRecommend}></input>
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
                  <label>Review Summary:</label>
                  <input className={styles.summaryInput} id="summary" type="text" name="summary" placeholder="Example: Best purchase ever!" value={this.state.summary} maxLength="60" onChange={this.handleInput}></input>
                </div>
                <div className={styles.body}>
                  <label>Review Body</label>
                  <input className={styles.bodyInput} id="body" type="text" name="body" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" value={this.state.body} onChange={this.handleInput}></input>
                </div>
              </div>
            </div>
            <div>
              <div className={styles.personalInfo}>PERSONAL INFORMATION</div>
              <div className={styles.infoContainer}>
                <div>
                  <label>
                    What is your nickname?*
                    <input className={styles.inputs} id="name" type="text" name="name" maxLength="60" placeholder="Example: jackson11!" value={this.state.name} onChange={this.handleInput}></input>
                  </label>
                  <div className={styles.privacy}>
                    For privacy reasons, do not use your full name or email address.
                  </div>
                </div>
                <div>
                  <label>
                    Your email*
                    <input className={styles.inputs} id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput}></input>
                  </label>
                  <div className={styles.privacy}>
                    For authentication reasons, you will not be emailed.
                  </div>
                </div>
              </div>
              <div className={styles.footer}>
                <div>By submitting a review you agree to our Terms and Conditions</div>
                <button className={styles.submitButton}>Submit Review</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default NewReview;

// return (
//   <div>
//     <div className={styles.modal}>
//       <div className={styles.title}>Write Your Review</div>
//       <div className={styles.subtitle}>About the Product</div>
//       <form className={styles.form} onSubmit={this.handleSubmit}>
//         <div>
//           Overall Rating*
//           <div className={styles.starContainer}>
//             <img className={styles.star} name="1" src="reviewStar.png" onClick={this.changeStars}/>
//             <img className={styles.star} name="2" src="reviewStar.png" onClick={this.changeStars}/>
//             <img className={styles.star} name="3" src="reviewStar.png" onClick={this.changeStars}/>
//             <img className={styles.star} name="4" src="reviewStar.png" onClick={this.changeStars}/>
//             <img className={styles.star} name="5" src="reviewStar.png" onClick={this.changeStars}/>
//           </div>
//         </div>
//         <div className={styles.recommend}>Do you recommend this product?*
//           <button name="recommendYes" className={styles.recommendButton} onClick={this.changeRecommend}>Yes</button>
//           <button name="recommendNo" className={styles.recommendButton} onClick={this.changeRecommend}>No</button>
//         </div>
//         <div>
//           <CharList metaData={this.props.metaData} updateChars={this.updateChars}/>
//         </div>
//         <div className={styles.inputs}>
//            <label>
//             Review Summary:
//             <input id="summary" type="text" name="summary" placeholder="Example: Best purchase ever!" value={this.state.summary} maxLength="60" onChange={this.handleInput}></input>
//           </label>
//           <label>
//             Review Body*
//             <input id="body" type="text" name="body" minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" value={this.state.body} onChange={this.handleInput}></input>
//           </label>
//           <label>
//             What is your nickname?*
//             <input id="name" type="text" name="name" maxLength="60" placeholder="Example: jackson11!" value={this.state.name} onChange={this.handleInput}></input>
//           </label>
//           <div className={styles.privacy}>
//             For privacy reasons, do not use your full name or email address.
//           </div>
//           <label>
//             Your email*
//             <input id="email" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput}></input>
//           </label>
//           <div className={styles.privacy}>
//             For authentication reasons, you will not be emailed.
//           </div>
//         </div>
//         <button className={styles.submitButton}>Submit Review</button>
//       </form>
//     </div>
//   </div>
// )
// }
// }