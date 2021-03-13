import React from 'react';
import styles from './Checkout.module.css'

const Checkout = ({isStocked, checkSizeSelected, hoverEffects}) => {
  var button;
  if(isStocked === true) {
    button = <button id="checkoutButton" className={styles.cart} onClick={(e) => checkSizeSelected()} onMouseMove={(e) => hoverEffects(e)}>ADD TO BAG</button>
  } else {
    button = <button className={styles.cartGrey} onClick={(e) => checkSizeSelected()}>OUT OF STOCK</button>
  }

  return (
    <div>
      {button}
      <button className={styles.favorite}>☆</button>
    </div>
  )
}

export default Checkout;
