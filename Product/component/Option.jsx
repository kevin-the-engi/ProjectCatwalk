import React from 'react'
import styles from './PInfo.module.css';

const Option = ({sku}) => (
  <option className={styles.option}>{sku.size}</option>
)

export default Option;