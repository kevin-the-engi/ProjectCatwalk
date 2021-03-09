import React from 'react';
import { shallow } from 'enzyme';
import QAdd from './QAdd.jsx';

describe('QAdd', () => {
  let show = false;
  const showModal = () => show = true

  const wrapper = shallow(<QAdd />);

  it('should render QModal', () => {
    wrapper.find('button').simulate('click', showModal());
    expect(show).toBe(true);
  })
});