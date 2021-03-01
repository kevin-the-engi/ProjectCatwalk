import React from 'react';
import styles from './NewReview.module.css'


class NewReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     body: '',
     name: '',
     email: '',
     recommend: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.changeRecommend = this.changeRecommend.bind(this);
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

  render() {
    return (
      <div>
        <div className={styles.modal}>
          <div>Write Your Review</div>
          <div>About the Product</div>
          <form className={styles.form}>
            <div>star rating</div>
            <div>Do you recommend this product?
              <button name="recommendYes" onClick={this.changeRecommend}>Yes</button>
              <button name="recommendNo" onClick={this.changeRecommend}>No</button>
            </div>
            <div>
              Characteristic Title
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>
            <label>
              Review Body:
              <input id="body" type="text" name="body" value={this.state.body} onChange={this.handleInput}></input>
            </label>
            <label>
              Nickname:
              <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleInput}></input>
            </label>
            <label>
              Email:
              <input id="email" type="text" name="email" value={this.state.email} onChange={this.handleInput}></input>
            </label>
            <button>Submit Review</button>
          </form>
        </div>
      </div>
    )
  }
}


export default NewReview;