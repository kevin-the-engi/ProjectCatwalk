import React from 'react';
import { shallow } from 'enzyme';
import FileUpload from './FileUpload.jsx';

describe('FileUpload', () => {
  it('should register file delete onClick', () => {
    const deletePhoto = jest.fn()
    const wrapper = shallow(<FileUpload delete={deletePhoto} />)

    expect(deletePhoto.mock.calls.length).toBe(0);
    wrapper.find('img').simulate('click', { preventDefault: () => null , target: { alt: 1 }});
    expect(deletePhoto.mock.calls.length).toBe(1);
  })
})