import React from 'react';
import { shallow } from 'enzyme';
import MoreQ from './MoreQ.jsx';

describe('MoreQ', () => {
  let clicks = 0;
  const onClick = (click = 2) => clicks += click;
  const wrapper = shallow(<MoreQ moreQ={onClick} />)

  it('should detect onClick and update counter', () => {
    wrapper.find('button').simulate('click', onClick);
    expect(clicks).toEqual(2);
    wrapper.find('button').simulate('click', onClick);
    expect(clicks).toEqual(4);
  });
});