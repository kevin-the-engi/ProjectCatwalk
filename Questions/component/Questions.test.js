import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import Questions from './Questions.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import QList from './QuestionList/QList.jsx';
import QAdd from './QAdd/QAdd.jsx';

describe('Questions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Questions />);
  });

  it('should contain SearchBar component', () => {
    expect(wrapper.containsMatchingElement(<SearchBar />)).toBe(true);
  });

  it('should contain QList Component', () => {
    expect(wrapper.containsMatchingElement(<QList />)).toBe(true);
  });

  it('should contain MoreQ Component', () => {
    expect(wrapper.containsMatchingElement(<MoreQ />)).toBe(true);
  })

  it('should initiate QAdd Component', () => {
    expect(wrapper.containsMatchingElement(<QAdd />)).toBe(true);
  });
})