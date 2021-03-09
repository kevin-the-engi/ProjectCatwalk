import React from 'react';
import { shallow } from 'enzyme';
import ProductBreakdown from './ProductBreakdown.jsx'
import ProdChar from '../ProdChar/ProdChar.jsx'

test('Product breakdown renders product characteristics', () => {
  const wrapper = shallow(<ProductBreakdown />);
  expect(wrapper.find('#prodChars')).toBeDefined()
});