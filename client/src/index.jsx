import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../../Product/component/Product.jsx';
import Questions from '../../Questions/component/Questions.jsx';
import RelatedItems from '../../Related/component/RelatedItems.jsx';
import Reviews from '../../Reviews/component/Reviews.jsx'

ReactDOM.render(
  // insert your component here to test individually, but delete before merging
  <RelatedItems/>,
  document.getElementById('app')
)