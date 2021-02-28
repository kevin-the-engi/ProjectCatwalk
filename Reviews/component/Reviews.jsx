import React from 'react'
// import ReactDOM from 'react-dom'
import ReviewsList from './ReviewsList.jsx'
import dummyData from './reviewData.js'

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
      <div id="reviews">
        <ReviewsList reviewList={this.state.reviewData}/>
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

