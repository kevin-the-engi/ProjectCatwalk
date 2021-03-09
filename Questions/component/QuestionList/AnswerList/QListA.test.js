import React from 'react';
import { shallow } from 'enzyme';
import QListA from './QListA.jsx';
import HelpfulA from './HelpfulA.jsx';
import ReportA from './ReportA.jsx';

describe('QListA', () => {
  const aData = {
    answer_id: '2134',
    body: 'This is my FINAL answer',
    answerer_name: 'Seller',
    helpfulness: 4,
    date: "2020-04-23T00:00:00.000Z"
  }
  const wrapper = shallow(<QListA answer={aData} />)

  it('should contain HelpfulA component', () => {
    expect(wrapper.containsMatchingElement(<HelpfulA />)).toBe(true);
  });

  it('should contain ReportA component', () => {
    expect(wrapper.containsMatchingElement(<ReportA />)).toBe(true);
  });
})