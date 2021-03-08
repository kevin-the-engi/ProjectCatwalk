import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';
import CompareButton from './CompareButton.jsx';

class PreviewImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
    }

    componentDidMount() {
        for (let i = 0; i < this.props.relatedItem.styles.results.length; i++) {
            if (this.props.relatedItem.styles.results[i]['default?'] === true) {
                this.setState({url: this.props.relatedItem.styles.results[i].photos[0].url});
            }
        }
    }

    render() {
      let actionButton;
      if (!this.props.currentItem) {
        // Change to remove button once implemented
        actionButton = null;
      } else {
        actionButton = <CompareButton relatedItem={this.props.relatedItem} currentItem={this.props.currentItem}/>
      }

      return (
          <div className={styles.imageContainer}>
            {actionButton}
            <img className={styles.previewImage} src={this.state.url}></img>
          </div>
      )
    }
}

export default PreviewImage;