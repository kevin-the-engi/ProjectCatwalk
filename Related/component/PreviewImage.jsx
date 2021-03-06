import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';
import ComparisonModal from './ComparisonModal.jsx';

class PreviewImage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ''
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        for (let i = 0; i < this.props.relatedItem.styles.results.length; i++) {
            if (this.props.relatedItem.styles.results[i]['default?'] === true) {
                this.setState({url: this.props.relatedItem.styles.results[i].photos[0].url});
            }
        }
    }

    showModal() {
      this.setState({show: true});
    }

    hideModal() {
      this.setState({show: false});
    }

    render() {

        return (
            <div className={styles.imageContainer}>
              <div className={styles.starContainer}>
                <span className={styles.star} onClick={this.showModal}>☆</span>
                <ComparisonModal hideModal={this.hideModal} show={this.state.show} currentItem={this.props.currentItem} relatedItem={this.props.relatedItem}/>
              </div>
                <img className={styles.previewImage} src={this.state.url}></img>
            </div>
        )
    }
}

export default PreviewImage;