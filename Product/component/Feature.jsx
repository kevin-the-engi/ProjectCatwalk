import React from 'react'
import styles from './Feature.module.css'
const Feature = ({feature}) => (
  <li className={styles.feature}>{feature}</li>
)

export default Feature;