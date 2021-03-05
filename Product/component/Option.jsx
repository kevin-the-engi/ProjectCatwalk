import React from 'react'
import styles from './PInfo.module.css';

const Option = ({size}) => (
  <option className={styles.option}>{size}</option>
)

export default Option;