import React from 'react';
import CharList from '../CharList/CharList.jsx'
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
    axios.post('/reviews', params)
    .then(function (response) {
      console.log('successfully posted review from app');
    })
    .catch(function (error) {
      console.log(error);
    });
   }

  render() {
    return (
      <div>
        <div className={styles.modal}>
          <div className={styles.title}>Write Your Review</div>
          <div className={styles.subtitle}>About the Product</div>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <div className={styles.starContainer}>
              <img className={styles.star} name="1" src="reviewStar.png" onClick={this.changeStars}/>
              <img className={styles.star} name="2" src="reviewStar.png" onClick={this.changeStars}/>
              <img className={styles.star} name="3" src="reviewStar.png" onClick={this.changeStars}/>
              <img className={styles.star} name="4" src="reviewStar.png" onClick={this.changeStars}/>
              <img className={styles.star} name="5" src="reviewStar.png" onClick={this.changeStars}/>
            </div>
            <div className={styles.recommend}>Do you recommend this product?
              <button name="recommendYes" onClick={this.changeRecommend}>Yes</button>
              <button name="recommendNo" onClick={this.changeRecommend}>No</button>
            </div>
            <div>
              <CharList metaData={this.props.metaData} updateChars={this.updateChars}/>
            </div>
            <div className={styles.inputs}>
               <label>
                Review Summary:
                <input id="summary" type="text" name="summary" size="60" placeholder="Example: Best purchase ever!" value={this.state.summary} onChange={this.handleInput}></input>
              </label>
              <label>
                Review Body:
                <input id="body" type="text" name="body" size="1000" placeholder="Why did you like the product or not?" value={this.state.body} onChange={this.handleInput}></input>
              </label>
              <label>
                Nickname:
                <input id="name" type="text" name="name"  size="60" placeholder="Example: jackson11!" value={this.state.name} onChange={this.handleInput}></input>
              </label>
              <label>
                Email:
                <input id="email" type="text" name="email" size="60" placeholder="Example: jackson11@email.com" value={this.state.email} onChange={this.handleInput}></input>
              </label>
            </div>
            <button className={styles.submitButton}>Submit Review</button>
          </form>
        </div>
      </div>
    )
  }
}


export default NewReview;