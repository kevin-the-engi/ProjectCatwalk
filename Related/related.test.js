// const sum = require('./component/sum.js');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

import React from 'react';
// import { expect } from 'chai';
import { shallow } from 'enzyme';

import RelatedItems from './component/RelatedItems.jsx';
import RelatedGallery from './component/RelatedGallery.jsx';
import OutfitGallery from './component/OutfitGallery.jsx';

describe('<RelatedItems/>', () => {
  it('renders one <RelatedGallery/> component', () => {
    const wrapper = shallow(<RelatedItems/>);
    expect(wrapper.find(RelatedGallery)).toHaveLength(1);
  });

  it('renders one <OutfitGallery/> component', () => {
    const wrapper = shallow(<RelatedItems/>);
    expect(wrapper.find(OutfitGallery)).toHaveLength(1);
  });
})
