import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

const RemoveButton = (props) => {

  let handleClick = function () {
    props.removeFromOutfit(props.relatedItem.product_id);
  }

  return (
    <div className={styles.removeButtonContainer} onClick={handleClick}>
      <svg className={styles.removeButton}>
        <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2" fill="white" />
        <path stroke="black" stroke-width="2" fill="none" d="M6.25,6.25,17.75,17.75" />
        <path stroke="black" stroke-width="2" fill="none" d="M6.25,17.75,17.75,6.25" />
      </svg>
    </div>
  )
}

export default RemoveButton;