import React from 'react'
import styles from './NameAndPrice.module.css';

const NameAndPrice = ({style}) => (
  <div>
    <div>
      <p className={styles.price}>{'$' + style.original_price}</p>
    </div>

    <div className={styles.textbox}>
      <p className={styles.text}><strong>STYLE ></strong></p><p className={styles.second}>{style.name}</p>
    </div>
  </div>
)

export default NameAndPrice;