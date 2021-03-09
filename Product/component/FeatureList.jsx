import React from 'react';
import Feature from './Feature.jsx'
import styles from './PInfo.module.css';

const FeatureList = ({featureList}) => (
  <ul className={styles.list}>
    {featureList.map((feature, i) =>
      <Feature key={i} feature={feature.feature}/>
    )}
  </ul>
)

export default FeatureList;