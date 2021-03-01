import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import ReviewsList from './ReviewsList.jsx'


test('ReviewsList renders itself when props are passed', () => {

  const props = {
    reviewList : [
      {summary: 'summary1', body: 'body1'},
      {summary: 'summary2', body: 'body2'}
    ]
  }
  const wrapper = mount(<ReviewsList reviewList={props.reviewList}/>);
  expect(wrapper.props().reviewList).toHaveLength(2)
})

