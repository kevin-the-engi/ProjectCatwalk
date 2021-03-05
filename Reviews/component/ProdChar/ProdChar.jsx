import React from 'react'
import charOptions from './charOptions.js'
import styles from './ProdChar.module.css'

const ProdChar = (props) => {

  let charMeaning = [];
  var charOptionsToRender = {};
  var percentage;
  if (props && props.metaData && props.metaData.characteristics && props.char && props.metaData.characteristics[props.char].value) {
    var charOptionstoRender = charOptions[props.char];
    charMeaning = Object.values(charOptions[props.char]);
    percentage = (props.metaData.characteristics[props.char].value / 5) * 100;
  }
  return (
   <div className={styles.container}>
     <div className={styles.chars}>
      {props.char}
     </div>
     <div className={styles.barContainer}>
      <div className={styles.progressBar}>
        <div className={styles.filler} style = {{marginLeft: `${percentage}%`}}></div>
      </div>
     </div>
    <div className={styles.explanations}>
      <div className={styles.explanation}>
        {charMeaning[0]}
      </div>
      <div className={styles.explanation2}>
        {charMeaning[1]}
      </div>
      <div className={styles.explanation3}>
        {charMeaning[2]}
      </div>
    </div>
   </div>
  )
}

export default ProdChar;