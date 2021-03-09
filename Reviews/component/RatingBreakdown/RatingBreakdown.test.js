import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import RatingBreakdown from './RatingBreakdown.jsx'
import Stars from '../Stars/Stars.jsx'
import Sliders from '../Sliders/Sliders.jsx'

test('Rating breakdown renders stars', () => {
  const wrapper = shallow(<Stars />);
  expect(wrapper.find('numRating')).toBeDefined()
});

test('Rating breakdown renders sliders', () => {
  const wrapper = shallow(<Sliders />);
  expect(wrapper.find('ratingBreakdown')).toBeDefined()
});


test("Rating Breakdown renders", () => {
  const props = {
    recommended: {
      false: '33',
      true: '22'
    },
    ratings: {
      0: '11',
      1: '44',
      2: '44',
      3: '33',
      4: '2',
      5: '6'
    }
  }
  const wrapper = shallow(<RatingBreakdown {...props}/>);
  expect(wrapper.exists()).toEqual(true);
});

