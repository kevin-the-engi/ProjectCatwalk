import React from 'react';
import PropTypes from 'prop-types';
import { shallow, mount } from 'enzyme';
import Questions from './component/Questions.jsx';
import SearchBar from './component/SearchBar.jsx';
import QList from './component/QuestionList/QList.jsx';
import QListQ from './component/QuestionList/QListQ.jsx';

describe('Questions', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Questions />);
  });

  it('should initiate SearchBar component', () => {
    expect(wrapper.containsMatchingElement(<SearchBar />)).toBe(true);
  });

  it('should initiate QList Component', () => {
    expect(wrapper.containsMatchingElement(<QList />)).toBe(true);
  });

  // it('should initiate QAdd Component', () => {
  //   expect(wrapper.containsMatchingElement(<QAdd />)).toBe(true);
  // });
})

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should detect onChange', () => {
    wrapper.find('input').simulate('change', {target: { name: 'search', value: 'hello' }});
  });

  it('should correctly update state with onChange value', () => {
    wrapper.find('input').simulate('change', {target: { name: 'search', value: 'hello' }});

    expect(wrapper.state().search).toBe('hello');
    expect(wrapper.state().search.length).toEqual(5);
  })
});

describe('QuestionList', () => {
  it('should pass data into QListQ component', () => {
    const testData = {
      questions: [
        { question_body: 'How is your day?'},
        { question_body: 'Is it a good one?'}
      ]
    };

    const wrapper = shallow(<QList qData={testData.questions} />);

    expect(wrapper.containsMatchingElement(<QListQ />)).toBe(true);
  });
})