import React from 'react';
import styles from './PGallery.module.css'
import Thumbnail from './Thumbnail.jsx'
import DownArrow from './DownArrow.jsx'
import TopArrow from './TopArrow.jsx'

class Gallery extends React.Component {
  constructor(props) {
    super(props)

    this.zoomIn = this.zoomIn.bind(this)
    this.zoomOut = this.zoomOut.bind(this)
  }

  zoomIn(event) {
    var div = document.getElementById("preview");
    var img = document.getElementById("zoom1");
    var posX = event.nativeEvent.offsetX;
    var posY = event.nativeEvent.offsetY;
    var url = img.src
    img.className = styles.hide
    div.style.backgroundImage = "url(" + url + ")"
    div.style.backgroundPosition=(-posX*1.8)+"px "+(-posY *1.8)+"px";

  }
  zoomOut() {
    var div = document.getElementById("preview");
    var img = document.getElementById("zoom1");
    img.className = styles.image
    div.style.backgroundImage = "none"
  }

  render() {
    return (
      <div className={styles.right}>
        <div className={styles.imageDiv}>
          <div id="preview" className={styles.div} onMouseMove={this.zoomIn} onMouseOut={this.zoomOut}>
            <img id="zoom1" className={styles.image} src={this.props.image} alt="dress"></img>
            <div id="thumbnails" className={styles.thumbnails}>
              {this.props.stylePhotos.map((photo, i) =>
                <Thumbnail key={i} id={i} photo={photo.url} handleThumbnailClick={this.props.handleThumbnailClick}/>)}
            </div>
          </div>
          <TopArrow/>
          <DownArrow/>
        </div>
        <div>
          <div className={styles.description1}>
            <h3 className={styles.heading}>{this.props.info.slogan}</h3>
            <p className={styles.text}>{this.props.info.description}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Gallery;
