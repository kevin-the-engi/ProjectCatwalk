import React from 'react';
import { shallow } from 'enzyme';
import ReportA from './ReportA.jsx';

describe('ReportA', () => {
  it('should disappear onClick', () => {
    const reportA = jest.fn();
    const wrapper = shallow(<ReportA reportA={reportA} />)

    expect(wrapper.state().reported).toBe(false);
    wrapper.find('button').simulate('click', { preventDefault: () => null })
    expect(wrapper.state().reported).toBe(true);
  })
})