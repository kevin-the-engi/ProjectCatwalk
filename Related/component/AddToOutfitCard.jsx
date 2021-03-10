import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

class AddToOutfitCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addToOutfit();
  }

  render() {
    return (
      <div className={styles.addToOutfitCard}>
        <div className={styles.addToOutfitCardContainer}>
          <div className={styles.addToOutfitButton} onClick={this.handleClick}>+</div>
          <div className={styles.addToOutfitLabel}>Add to Outfit</div>
        </div>
      </div>
    )
  }
}

export default AddToOutfitCard;