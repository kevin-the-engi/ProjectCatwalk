import React from 'react'
import ReactDOM from 'react-dom'
import styles from './product.module.css'
import Gallery from './PGallery.jsx'
import Info from './PInfo.jsx'

class Product extends React.Component {
  constructor () {
    super()
  }

  render () {
    return(
      <div className={styles.body}>
        <Gallery />
        <Info />
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


 // map through images and generate thumbail img elements