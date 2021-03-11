import React from 'react'
import ReactDOM from 'react-dom'
import styles from './product.module.css'
import Gallery from './PGallery.jsx'
import Info from './PInfo.jsx'
import axios from 'axios';

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    id: this.props.productId,
    image: '',
    stylePhotos: [],
    info: {},
    features: [],
    styles: [],
    style: {},
    skus: [],
    thumbnailClicked: '',
    styleClicked: ''
  }

  this.changeStyle = this.changeStyle.bind(this)
  this.handleThumbnailClick = this.handleThumbnailClick.bind(this)
  this.getSkus = this.getSkus.bind(this)
  this.getData = this.getData.bind(this)
}
  componentDidMount() {
    this.getData(this.props.productId);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.productId !== prevProps.productId) {
      this.setState((state, props) => {
        id: this.props.productId
      })
      this.getData(this.props.productId);
    }
  }

  getData(id) {
    axios.get('/product/data', {
      params: {
        id: id
      }
    })
    .then(response => {
      var features = response.data['features']
      this.setState({
        info: response.data,
        features: features
      })
    })

    axios.get('/product/styles', {
      params: {
        id: id
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
      // var productId = this.props.productId;

      this.setState({
        // id: productId,
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

  // user clicks on new style - function higlights current style, and sends info to state, including new thumbnails (stylePhotos) and main photo corresponding to thumbnail at the index of last clicked thumbnail (image) to state
  changeStyle(photos, style, skus, id) {
    if(this.state.styleClicked !== id && this.state.styleClicked !== '') {
      var clickedStyle = this.state.styleClicked
      document.getElementById(clickedStyle).className = styles.style
    }
    document.getElementById(id).className = styles.styleClicked;

    var skus = this.getSkus(skus);
    
    this.setState({
      stylePhotos: photos,
      image: photos[this.state.thumbnailClicked].url,
      style: style,
      skus: skus,
      styleClicked: id
    })
  }

  // user clicks on thumbnail - higlights thumbnail and updates main image
  handleThumbnailClick(photo, id) {
    if(this.state.thumbnailClicked !== id && this.state.thumbnailClicked !== '') {
      var clickedStyle = this.state.thumbnailClicked
      document.getElementById(clickedStyle).className = styles.thumbnail
      }
      document.getElementById(id).className = styles.clicked;

    this.setState({
      image: photo,
      thumbnailClicked: id
    })
  }

  render () {
    return(
      <div>
      <div className={styles.header}></div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div id="gallery">
            <Gallery handleThumbnailClick={this.handleThumbnailClick} image={this.state.image} info={this.state.info} stylePhotos={this.state.stylePhotos}/>
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

export default Product;
