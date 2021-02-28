import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import Reviews from './component/Reviews.jsx'
import IndividualReview from './component/IndividualReview.jsx'
import ReviewsList from './component/ReviewsList.jsx'


//Reviews test
test('Review renders upon component did mount', () => {
  // Render the component
  const wrapper = shallow(<Reviews />);
  // Check if it has the matching element
  expect(wrapper.containsMatchingElement(<ReviewsList />)).toEqual(true);
});


//Reviews test
test('Reviews component renders the div wrapping ReviewsList', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find('#reviews')).toBeDefined()
});


//ReviewsList test
test('ReviewList renders itself when props are passed', () => {

  const props = {
    reviewList : [
      {summary: 'summary1', body: 'body1'},
      {summary: 'summary2', body: 'body2'}
    ]
  }
  const wrapper = mount(<ReviewsList reviewList={props.reviewList}/>);
  expect(wrapper.props().reviewList).toHaveLength(2)
})


//IndividualReview test
test('IndividualReview renders itself when props are passed', () => {

  const props = {
    review: {
      summary: 'summary',
      body: 'body'
    }
  }
  const wrapper = mount(<IndividualReview review={props.review}/>);
  expect(wrapper.props().review.summary).toEqual('summary')
})