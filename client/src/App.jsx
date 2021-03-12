import React from 'react'
import Product from '../../Product/component/Product.jsx';
import Questions from '../../Questions/component/Questions.jsx';
import RelatedItems from '../../Related/component/RelatedItems.jsx';
import Reviews from '../../Reviews/component/Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productId: 14932
    }
    this.viewNewProduct = this.viewNewProduct.bind(this);
  }

  viewNewProduct(id) {
    this.setState({
      productId: id
    })
  }

  render() {
    return (
      <div>
        {/* <Product productId={this.state.productId} /> */}
        <RelatedItems productId={this.state.productId} viewNewProduct={this.viewNewProduct}/>
        {/* <Questions productId={this.state.productId} />
        <Reviews productId={this.state.productId} /> */}
      </div>
    )
  }
}

export default App;



// {/* <RelatedItems productId={this.state.productId} viewNewProduct={this.viewNewProduct}/>
//         <Questions productId={this.state.productId} />
//         <Reviews productId={this.state.productId} /> */}