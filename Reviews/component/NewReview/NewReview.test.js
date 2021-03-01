import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import NewReview from './NewReview.jsx'


test("email text is updated", () => {
  const wrapper = mount(<NewReview performSearch={() => {}} />);
  wrapper.find("#email").simulate("change", {
    target: { name: "email", value: "email" }
  });
  expect(wrapper.state().email).toEqual("email");
  expect(wrapper.find("#email").props().value).toEqual("email");
})


test("body text is updated", () => {
  const wrapper = mount(<NewReview performSearch={() => {}} />);
  wrapper.find("#body").simulate("change", {
    target: { name: "body", value: "body" }
  });
  expect(wrapper.state().body).toEqual("body");
  expect(wrapper.find("#body").props().value).toEqual("body");
})


test("name text is updated", () => {
  const wrapper = mount(<NewReview performSearch={() => {}} />);
  wrapper.find("#name").simulate("change", {
    target: { name: "name", value: "name" }
  });
  expect(wrapper.state().name).toEqual("name");
  expect(wrapper.find("#name").props().value).toEqual("name");
})