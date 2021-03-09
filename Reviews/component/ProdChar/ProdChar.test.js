
import React from 'react';
import { mount } from 'enzyme';
import { wrapper } from 'enzyme';
import ProdChar from './ProdChar.jsx'

test('Prod Char renders itself when props are passed', () => {
  const props = {
    char: 'Fit'
  }
  const wrapper = mount(<ProdChar char={props.char}/>);
  expect(wrapper.props().char).toEqual('Fit')
})