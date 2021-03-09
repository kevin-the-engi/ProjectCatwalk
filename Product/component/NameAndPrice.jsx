import React from 'react'
import styles from './NameAndPrice.module.css';

const NameAndPrice = ({style}) => (
  <div>
    <p className={styles.price}>{'$' + style.original_price}</p>

    <div className={styles.styleName}>
      <p className={styles.text}><strong>STYLE ></strong></p><p className={styles.second}>{style.name}</p>
    </div>
  </div>
)

export default NameAndPrice;