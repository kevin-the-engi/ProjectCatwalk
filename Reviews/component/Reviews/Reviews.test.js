import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import Reviews from './Reviews.jsx'
import ReviewsList from '../ReviewsList/ReviewsList.jsx'


test('Review renders upon component did mount', () => {
  // Render the component
  const wrapper = shallow(<Reviews />);
  // Check if it has the matching element
  expect(wrapper.containsMatchingElement(<ReviewsList />)).toEqual(true);
});

test('Reviews component renders the div wrapping ReviewsList', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.find('#reviews')).toBeDefined()
});

