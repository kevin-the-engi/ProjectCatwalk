import React from 'react'
import ReactDOM from 'react-dom'
import styles from './product.module.css'
import Gallery from './PGallery.jsx'
import Info from './PInfo.jsx'
import axios from 'axios';

class Product extends React.Component {
  constructor () {
    super()
    this.state = {
    id: 14807,
    image: '',
    info: {} ,
    thumbnails: [],
    results: [],
  }

  this.changeStyle = this.changeStyle.bind(this)
}

  componentDidMount() {
    // hardcoded product_id temporarily for MVP
    this.setState({id: 14807})
    axios.get('/product', {
      params: {
          id: this.state.id
      }
    })
    .then((response) => {
      var results = response.data;
      var image;
      var info;
      var thumbnails = [];

      console.log('results: ', results)
      for(var i = 0; i < results.length; i++) {
        if (results[i]['default?'] === true) {
          var image = results[i].photos[0].thumbnail_url;
          var info = results[i]
        }
        thumbnails.push(results[i].photos[0].thumbnail_url);
      }

      this.setState({
        image: image,
        info: info,
        thumbnails: thumbnails,
        results: results,
      });
    })
  }

  changeStyle(img) {
    this.setState({
      image: img
    })
  }

  render () {
    return(
      <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div id="gallery">
            <Gallery changeStyle={this.changeStyle} image={this.state.image} thumbnails={this.state.thumbnails} results={this.state.results}/>
          </div>
        </div>
        <div className={styles.right}>
          <div id="info">
            <Info info={this.state.info} changeStyle={this.changeStyle} thumbnails={this.state.thumbnails}/>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
// ReactDOM.render(
//   // insert your component here to test individually, but delete before merging
//   <Product />,
//   document.getElementById('app')
// )

export default Product;
