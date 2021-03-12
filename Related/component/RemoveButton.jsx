import React from 'react';
import styles from './css_modules/RelatedGallery.module.css';

const RemoveButton = (props) => {

  let handleClick = function () {
    props.removeFromOutfit(props.relatedItem.product_id);
  }

  return (
    <div className={styles.removeButtonContainer} onClick={handleClick}>
      <svg className={styles.removeButton}>
        <circle cx="12" cy="12" r="11" stroke="black" stroke-width="1" fill="white" />
        <path stroke="black" stroke-width="1" fill="none" d="M7,7,17,17" />
        <path stroke="black" stroke-width="1" fill="none" d="M7,17,17,7" />
      </svg>
    </div>
  )
}

export default RemoveButton;