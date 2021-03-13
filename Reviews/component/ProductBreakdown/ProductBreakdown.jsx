import React from 'react';
import ProdChar from '../ProdChar/ProdChar.jsx';


const ProductBreakdown = (props) => {
  var chars = []
  if (props && props.metaData && props.metaData.characteristics) {
    chars = Object.keys(props.metaData.characteristics);
  }

  return (
    <div id="prodChars">
      {chars.map((char, i) => {
        return (
          <ProdChar char={char} metaData={props.metaData} chars={props.metaData.characteristics} key={i}/>
        )
      })}
    </div>
  )
}

export default ProductBreakdown;