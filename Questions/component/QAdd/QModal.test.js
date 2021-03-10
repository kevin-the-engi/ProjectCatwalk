import React from 'react';
import { shallow } from 'enzyme';
import QModal from './QModal.jsx';

describe('QModal', () => {
  it('should contain the product name', () => {
    const product = 'Lederhosen';
    const wrapper = shallow(<QModal productName={product} />);

    expect((wrapper.instance().props.productName)).toBe('Lederhosen');
  })

  it('should detect input for form', () => {
    const wrapper = shallow(<QModal />);

    wrapper.find('.textarea').simulate('change',
      {target: {
        name: 'body', value: 'What time is it?'
      }});

    wrapper.find('#question-username').simulate('change',
    {target: {
      name: 'name', value: 'Kevin'
    }});

    wrapper.find('#question-email').simulate('change',
    {target: {
      name: 'email', value: 'k@email.com'
    }});

    expect(wrapper.state().body).toBe('What time is it?');
    expect(wrapper.state().name).toBe('Kevin');
    expect(wrapper.state().email).toBe('k@email.com');
  });

  it('should call AddQuestion and Close functions on submit', () => {
    const formData = { body: '', name: '', email: '' };
    const addQuestion = jest.fn();
    const close = jest.fn();

    const wrapper = shallow(<QModal addQuestion={addQuestion} close={close} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => null });

    expect(addQuestion.mock.calls.length === 1 && close.mock.calls.length === 1).toBe(true);
  });
});