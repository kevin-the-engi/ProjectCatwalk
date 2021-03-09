import React from 'react';
import { shallow } from 'enzyme';
import HelpfulA from './HelpfulA.jsx';

describe('HelpfulA', () => {
  it('should disappear onClick', () => {
    const updateHelpfulA = jest.fn();
    const wrapper = shallow(<HelpfulA updateHelpfulA={updateHelpfulA} />);

    wrapper.find('button').simulate('click', { preventDefault: () => null });
    expect(wrapper.state().show).toBe(false);
  });
});