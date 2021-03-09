import React from 'react';
import { shallow } from 'enzyme';
import HelpfulQ from './HelpfulQ.jsx';

describe('HelpfulQ', () => {
  it('should disappear onClick', () => {
    const updateHelpfulQ = jest.fn();
    const wrapper = shallow(<HelpfulQ updateHelpfulQ={updateHelpfulQ} />);

    expect(wrapper.state().show).toBe(true);
    wrapper.find('button').simulate('click', { preventDefault: () => null });
    expect(wrapper.state().show).toBe(false);
  })
})