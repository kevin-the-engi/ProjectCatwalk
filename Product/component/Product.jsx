import React from 'react'
import ReactDOM from 'react-dom'
import styles from '/Users/Ika/Work/frontend-capstone/Product/component/product.module.css'

class Product extends React.Component {
  constructor () {
    super()
  }

  render () {
    return(
      <div className="main">

        <section>
          <div className={styles.gallery}>
            <img className={styles.main} src="/gallery" alt="dress"></img>
          </div>
          <div className="description">
            <h3>Product Slogan</h3>
            <p>Product descripton1</p>
            <ul>Product descripton2</ul>
          </div>
        </section>

        <section className="product-info">
          <div className={styles.reviews}>Reviews</div>
          <p className={styles.category}>CATEGORY</p>
          <p className={styles.name}>Expanded Product Name</p>
          <p>369</p>
          <div className="sytle-selector">Style Selector</div>
        </section>

        <section className="checkout">
          <select>Size</select>
          <select>Quantity</select>
          <button>Checkout</button>
          <button>favorite</button>
        </section>

      </div>
    )
  }
}

ReactDOM.render(
  // insert your component here to test individually, but delete before merging
  <Product />,
  document.getElementById('app')
)

export default Product;


