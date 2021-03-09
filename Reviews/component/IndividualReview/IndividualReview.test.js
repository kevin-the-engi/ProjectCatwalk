import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import IndividualReview from './IndividualReview.jsx'


test('IndividualReview renders itself when props are passed', () => {

  const props = {
    review: {
      summary: 'summary',
      body: 'body',
      rating: 5,
      helpfullness: 49,
      date: '2020-08-05T00:00:00.000Z',
      photos: [],
      recommend: true,
      response: 'response',
      review_id: 14678,
      reviewer_name: 'reviewer'
    }
  }
  const wrapper = mount(<IndividualReview review={props.review}/>);
  expect(wrapper.props().review.summary).toEqual('summary')
  expect(wrapper.props().review.body).toEqual('body')
  expect(wrapper.props().review.rating).toEqual(5)
  expect(wrapper.props().review.helpfullness).toEqual(49)
  expect(wrapper.props().review.date).toEqual('2020-08-05T00:00:00.000Z')
  expect(wrapper.props().review.photos).toEqual([])
  expect(wrapper.props().review.recommend).toEqual(true)
  expect(wrapper.props().review.response).toEqual('response')
  expect(wrapper.props().review.review_id).toEqual(14678)
  expect(wrapper.props().review.reviewer_name).toEqual('reviewer')
})


