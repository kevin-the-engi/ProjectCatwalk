import React from 'react';
import { shallow, mount } from 'enzyme';
import AAdd from './AAdd.jsx';

describe('AAdd', () => {
  it('should show Modal onClick', () => {
    const wrapper = shallow(<AAdd />);

    expect(wrapper.state().show).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().show).toBe(true);
  })
})