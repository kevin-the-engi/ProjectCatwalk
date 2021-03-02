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
    thumbnails: []
  }
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
      var results = response.data.results;
      var image;
      var thumbnails = [];
      console.log(results)
      for(var i = 0; i < results.length; i++) {
        if (results[i]['default?'] === true) {
          var image = results[i].photos[0].thumbnail_url;
          console.log('image object: ', image)
        }
        thumbnails.push(results[i].photos[0].thumbnail_url);

      }
      this.setState({
        image: image,
        thumbnails: thumbnails
      });
    })
  }

  render () {
    return(
      <div className={styles.context}>
        <Gallery image={this.state.image} thumbnails={this.state.thumbnails}/>
        <Info />
      </div>
    )
  }
}

ReactDOM.render(
  // insert your component here to test individually, but delete before merging
  <Product />,
  document.getElementById('app')
)

export default Product;


 // map through images and generate thumbail img elements