import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar.jsx';

describe('SearchBar', () => {
  const mockSearch = jest.fn();
  const wrapper = shallow(<SearchBar dynamicSearch={mockSearch}/>)

  it('should detect onChange', () => {
    wrapper.find('input').simulate('change', {target: { name: 'search', value: 'hello' }});
  });

  it('should correctly update state with onChange value', () => {
    wrapper.find('input').simulate('change', {target: { name: 'search', value: 'hello' }});

    expect(wrapper.state().search).toBe('hello');
    expect(wrapper.state().search.length).toEqual(5);
  })
});
