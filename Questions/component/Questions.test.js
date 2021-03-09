import React from 'react';
import { shallow } from 'enzyme';
import Questions from './Questions.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import QList from './QuestionList/QList.jsx';
import QAdd from './QAdd/QAdd.jsx';

describe('Questions', () => {
  let wrapper = shallow(<Questions />, {disableLifecycleMethods: true});

  it('should contain SearchBar component', () => {
    expect(wrapper.containsMatchingElement(<SearchBar />)).toBe(true);
  });

  it('should contain QList Component', () => {
    if (wrapper.state().match === true && wrapper.state().qTotal !== 0) {
      expect(wrapper.containsMatchingElement(<QList />)).toBe(true);
    }
  });

  it('should contain MoreQ Component', () => {
    if (wrapper.state().hide === false) {
      expect(wrapper.containsMatchingElement(<MoreQ />)).toBe(true);
    }
  })

  it('should initiate QAdd Component', () => {
    expect(wrapper.containsMatchingElement(<QAdd />)).toBe(true);
  });


  it('should filter through data', () => {
    const instance = wrapper.instance();

    wrapper.setState({
      questions: [
        { question_body: 'Do you like tacos with ice cream? '}
      ]
    })

    expect(wrapper.state().filtered.length).toBe(0);
    instance.dynamicSearch('like');
    expect(wrapper.state().filtered.length).toBe(1);
    expect(wrapper.state().match).toBe(true);

    instance.dynamicSearch('lie');
    expect(wrapper.state().filtered.length).toBe(0);
    expect(wrapper.state().match).toBe(false);

    instance.dynamicSearch('');
    expect(wrapper.state().filtered.length).toBe(0);
    expect(wrapper.state().match).toBe(true);
  })

  it('should increase qCount and set hide everytime function is run', () => {
    const instance = wrapper.instance();

    wrapper.setState({
      qCount: 2,
      qTotal: 5,
      hide: true
    })

    instance.moreQ();
    expect(wrapper.state().qCount).toBe(4);
    expect(wrapper.state().hide).toBe(false);
    instance.moreQ();
    expect(wrapper.state().qCount).toBe(6);
    expect(wrapper.state().hide).toBe(true);
  })
})