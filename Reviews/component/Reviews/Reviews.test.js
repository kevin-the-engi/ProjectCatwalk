import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import axios from 'axios';
import Reviews from './Reviews.jsx';
import ReviewsList from '../ReviewsList/ReviewsList.jsx';
import ProductBreakdown from '../ProductBreakdown/ProductBreakdown.jsx';
import RatingBreakdown from '../RatingBreakdown/RatingBreakdown.jsx';
import WriteNewReview from '../WriteNewReview/WriteNewReview.jsx';

test('Review renders upon component did mount', () => {
  // Render the component
  const wrapper = shallow(<Reviews />);
  // Check if it has the matching element
  expect(wrapper.containsMatchingElement(<ReviewsList />)).toEqual(true);
});

test('ProductBreadown renders upon component did mount', () => {
  // Render the component
  const wrapper = shallow(<Reviews />);
  // Check if it has the matching element
  expect(wrapper.containsMatchingElement(<ProductBreakdown />)).toEqual(true);
});

test('RatingBreakdown renders upon component did mount', () => {
  // Render the component
  const wrapper = shallow(<Reviews />);
  // Check if it has the matching element
  expect(wrapper.containsMatchingElement(<RatingBreakdown />)).toEqual(true);
});

test('WriteNewReview renders upon component did mount', () => {
  // Render the component
  const wrapper = shallow(<Reviews />);
  // Check if it has the matching element
  expect(wrapper.containsMatchingElement(<WriteNewReview />)).toEqual(true);
});

test('Reviews renders the div wrapping ReviewsList', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find('#reviews')).toBeDefined()
});

test('Reviews renders the div wrapping WriteNewReview', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find('footer')).toBeDefined()
});

test('Reviews renders the div wrapping ProductBreakdown', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find('#productBreakdown')).toBeDefined()
});

test('Reviews renders the div wrapping RatingBreakdown', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find('ratingBreakdown')).toBeDefined()
});




jest.mock('axios', () => {
  const exampleArticles = [
    { reviewData: [], url: 'test url' }
  ];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles)),
  };
});
