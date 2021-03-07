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
    id: 14034,
    image: '',
    stylePhotos: [],
    info: {},
    features: [],
    styles: [],
    style: {},
    skus: [],
  }

  this.changeStyle = this.changeStyle.bind(this)
  this.handleThumbnailClick = this.handleThumbnailClick.bind(this)
  this.getSkus = this.getSkus.bind(this)
}

  componentDidMount() {
    // hardcoded product_id temporarily for MVP
    this.setState({id: 14034})

    axios.get('/product/data', {
      params: {
        id: this.state.id
      }
    })
    .then(response => {
      console.log(response.data)
      var features = response.data['features']
      this.setState({
        info: response.data,
        features: features
      })
    })

    axios.get('/product/styles', {
      params: {
        id: this.state.id
      }
    })
    .then((response) => {
      var styles = response.data.results;
      var stylePhotos = [];
      var image;
      var style;
      var skusObject;
      // finds default style and saves its main image and thumbnails(stylePhotos)
      for(var i = 0; i < styles.length; i++) {
        if (styles[i]['default?'] === true) {
          image = styles[i].photos[0].url;
          stylePhotos = styles[i].photos;
          style = styles[i];
          skusObject = style.skus
          break;
        }
      }

      var skus = this.getSkus(skusObject);

      this.setState({
        image: image,
        stylePhotos: stylePhotos,
        styles: styles,
        style: style,
        skus: skus
      });
    })
  }

  // transforms skus object to array of skus data
  getSkus(skusObject) {
    var skus= []

    for(var sku in skusObject) {
      skus.push(skusObject[sku])
    }

    return skus;
  }

  // user clicks on style - updates style info across the app alone with main image and thumbnails (style photos)
  changeStyle(photos, style, skus) {
    var skus = this.getSkus(skus);
    this.setState({
      stylePhotos: photos,
      image: photos[0].url,
      style: style,
      skus: skus
    })
  }

  // user clicks on thumnail - updates main image
  handleThumbnailClick(photo) {
    this.setState({
      image: photo
    })
  }

  render () {
    return(
      <div>
      <div className={styles.header}></div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div id="gallery">
            <Gallery changeStyle={this.changeStyle} handleThumbnailClick={this.handleThumbnailClick} image={this.state.image} styles={this.state.styles} info={this.state.info} stylePhotos={this.state.stylePhotos}/>
          </div>
        </div>
        <div className={styles.right}>
          <div id="info">
            <Info style={this.state.style} changeStyle={this.changeStyle} info={this.state.info} features={this.state.features} styles={this.state.styles} skus={this.state.skus}/>
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
