import React from 'react';
import ReactDOM from 'react-dom';
import Product from '../../Product/component/Product.jsx';
import QuestionsApp from '../../Questions/QuestionsApp.jsx';
import RelatedItems from '../../Related/component/RelatedItems.jsx';
import Reviews from '../../Reviews/ReviewsApp.jsx'

ReactDOM.render(
  // insert your component here to test individually, but delete before merging
  <RelatedItems />,
  document.getElementById('app')
)
