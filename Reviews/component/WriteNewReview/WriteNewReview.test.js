import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import WriteNewReview from './WriteNewReview.jsx'


test('Test Button component', () => {
    const mockCallBack = jest.fn();

    const wrapper = mount((<WriteNewReview onClick={mockCallBack} />));
    wrapper.find('#addReview').simulate('click', { preventDefault() {} });
    expect(wrapper.state().clicked).toEqual(true);
  });
