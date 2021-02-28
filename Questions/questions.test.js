import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './component/SearchBar.jsx';

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