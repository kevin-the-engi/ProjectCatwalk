import React from 'react';
import { shallow } from 'enzyme';
import QList from './QList.jsx';
import QListQ from './QListQ.jsx';

describe('QList', () => {
  it('should map data to QListQ component', () => {
    const testArr = [ { question_id: 12345, question: 'Are hotdogs sandwiches?'} ];
    const wrapper = shallow(<QList qData={testArr} />);

    expect(wrapper.containsMatchingElement(<QListQ />)).toBe(true);
  })
});