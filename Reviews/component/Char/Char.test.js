import React from 'react';
import { shallow } from 'enzyme';
import Char from './Char.jsx'


test('Char renders radio buttons', () => {
  const wrapper = shallow(<Char />);
  expect(wrapper.find('#buttons')).toBeDefined()
});