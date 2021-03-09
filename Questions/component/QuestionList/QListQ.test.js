import React from 'react';
import { shallow, render } from 'enzyme';
import QListQ from './QListQ.jsx';
import QListA from './AnswerList/QListA.jsx';

describe('QListQ', () => {
  const question = {
    question_id: 23456,
    question_helpfulness: 2,
    question_body: "This is a question",
    answers: [{ answer_id: 12345 }]
  }

  it('should contain answer data as array', () => {
    const wrapper = shallow(<QListQ question={question} />);

    expect(Array.isArray(wrapper.instance().props.question.answers)).toBe(true);
  })

  // it('should render QListA component', () => {
  //   const wrapper = render(<QListQ question={question} />);

  //   expect(wrapper.exists(<QListQ />)).toBe(true);
  // })
})