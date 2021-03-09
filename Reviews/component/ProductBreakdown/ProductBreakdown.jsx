import React from 'react';
import ProdChar from '../ProdChar/ProdChar.jsx';


const ProductBreakdown = (props) => {
  var chars = []
  if (props && props.metaData && props.metaData.characteristics) {
    chars = Object.keys(props.metaData.characteristics);
  }

  return (
    <div id="prodChars">
      {chars.map((char) => {
        return (
          <ProdChar char={char} metaData={props.metaData} chars={props.metaData.characteristics}/>
        )
      })}
    </div>
  )
}

export default ProductBreakdown;