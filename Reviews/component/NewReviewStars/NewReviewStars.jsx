import React from 'react';
import styles from './NewReviewStars.module.css'

class NewReviewStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     rating: '',
     selection: true
    }
    this.makeSelection = this.makeSelection.bind(this);
  }

  makeSelection(e) {
    var numRating = e.target.name
     this.setState({
       rating: numRating,
       selection: false
     })
     this.props.changeStars(numRating)
   }

  render() {
    var starMeaning = ['Poor', 'Fair', 'Average', 'Good', 'Great'];

    return (
      <div>
        {this.state.selection ?
        <div className={styles.select}>Please select</div> :
        <div className={styles.select}>{starMeaning[this.state.rating - 1]}</div>}
        {this.state.selection ?
        <div className={styles.starContainer}>
          <input className={styles.star} name="1" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>
          <input className={styles.star} name="2" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>
          <input className={styles.star} name="3" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>
          <input className={styles.star} name="4" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>
          <input className={styles.star} name="5" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>
        </div> :
        <div className={styles.starContainer}>
          <input className={styles.star} name="1" onClick={this.props.changeStars} onClick={this.makeSelection} value="★"></input>
          {this.state.rating > 1 ?
          <input className={styles.star} name="2" onClick={this.props.changeStars} onClick={this.makeSelection} value="★"></input> :
          <input className={styles.star} name="2" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>}
          {this.state.rating > 2 ?
          <input className={styles.star} name="3" onClick={this.props.changeStars} onClick={this.makeSelection} value="★"></input> :
          <input className={styles.star} name="3" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>}
          {this.state.rating > 3 ?
          <input className={styles.star} name="4" onClick={this.props.changeStars} onClick={this.makeSelection} value="★"></input> :
          <input className={styles.star} name="4" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>}
          {this.state.rating > 4 ?
          <input className={styles.star} name="5" onClick={this.props.changeStars} onClick={this.makeSelection} value="★"></input> :
          <input className={styles.star} name="5" onClick={this.props.changeStars} onClick={this.makeSelection} value="☆"></input>}
        </div>
        }
      </div>
    )
  }
}

export default NewReviewStars;