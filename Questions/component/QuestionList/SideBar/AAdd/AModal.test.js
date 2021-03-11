import React from 'react';
import { shallow, render } from 'enzyme';
import AModal from './AModal.jsx';

describe('AModal', () => {
  const wrapper = shallow(<AModal />);

  it('should render a form', () => {
    expect(wrapper.find('form').exists()).toBeTruthy();
  })

  it('should detect input for form', () => {
    wrapper.find('.textarea').simulate('change',
      {target: {
        name: 'body', value: 'I sell things'
      }});

    wrapper.find('.answer-username').simulate('change',
      {target: {
        name: 'name', value: 'Seller'
      }});

    wrapper.find('.answer-email').simulate('change',
      {target: {
        name: 'email', value: 'seller@email.com'
      }});

    expect(wrapper.state().body).toBe('I sell things');
    expect(wrapper.state().name).toBe('Seller');
    expect(wrapper.state().email).toBe('seller@email.com');
  });

  it('should call AddAnswer and Close functions on submit', () => {
    const addAnswer = jest.fn();
    const close = jest.fn();

    const wrapper = shallow(<AModal addAnswer={addAnswer} close={close} />);
    wrapper.find('form').simulate('submit', { preventDefault: () => null });

    expect(addAnswer.mock.calls.length === 1 && close.mock.calls.length === 1).toBe(true);
  });

  it('should delete photo from array', () => {
    const wrapper = shallow(<AModal />);
    const instance = wrapper.instance();

    wrapper.setState({
      photos: ['link1', 'link2']
    });

    expect(wrapper.state().photos.length).toEqual(2);
    instance.deletePhoto(1);
    expect(wrapper.state().photos.length).toEqual(1);
  })
})