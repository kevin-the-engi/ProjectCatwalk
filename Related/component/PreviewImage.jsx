import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';
import CompareButton from './CompareButton.jsx';
import RemoveButton from './RemoveButton.jsx';

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
      // if the currentItem prop doesn't exist (i.e. when it is an outfit item product card)
      if (!this.props.currentItem) {
        actionButton = <RemoveButton relatedItem={this.props.relatedItem} removeFromOutfit={this.props.removeFromOutfit}/>
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