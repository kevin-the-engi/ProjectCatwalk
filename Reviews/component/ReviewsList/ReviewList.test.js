import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import ReviewsList from './ReviewsList.jsx'


test('ReviewsList renders itself when props are passed', () => {

  const props = {
    reviewList : [
      {
        body: "Molestiae laborum accusamus natus necessitatibus cum debitis autem soluta impedit. Maiores consequuntur delectus. Nostrum deserunt aliquid dolores commodi itaque excepturi sunt. Totam excepturi dolorem est. Autem libero est aut occaecati facilis qui corporis id. Soluta dolor vero rerum facere reprehenderit atque.",
        date: "2020-08-05T00:00:00.000Z",
        helpfulness: 49,
        rating: 5,
        recommend: true,
        response: null,
        review_id: 147678,
        reviewer_name: "Maggie6",
        summary: "sample summary",
        photos: []
      },
      {
      body: "Molestiae laborum accusamus natus necessitatibus cum debitis autem soluta impedit. Maiores consequuntur delectus. Nostrum deserunt aliquid dolores commodi itaque excepturi sunt. Totam excepturi dolorem est. Autem libero est aut occaecati facilis qui corporis id. Soluta dolor vero rerum facere reprehenderit atque.",
      date: "2020-08-05T00:00:00.000Z",
      helpfulness: 49,
      rating: 5,
      recommend: true,
      response: null,
      review_id: 147678,
      reviewer_name: "Maggie6",
      summary: "sample summary",
      photos: []
      }
    ]
  }
  const wrapper = mount(<ReviewsList reviewList={props.reviewList}/>);
  expect(wrapper.props().reviewList).toHaveLength(2)
})

