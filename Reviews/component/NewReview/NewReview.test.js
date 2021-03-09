import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { render } from 'enzyme';
import NewReview from './NewReview.jsx'
import NewReviewStars from '../NewReviewStars/NewReviewStars.jsx';


test('NewReview renders itself when props are passed', () => {
  const props = {
    metaData: {
      characteristics: {
        Fit: {
          id: 50505,
          value: '3.94'
        }
      },
      product_id: 23443,
      ratings: {
        0: '1',
        1: '2',
        2: '4',
        3: '4',
        4: '4',
        5: '5'
      },
      recommended: {
        false: '25',
        true: '22'
      }
    },
    productName: 'product name'
  }

  const wrapper = mount(<NewReview metaData={props.metaData} productName={props.productName}/>);
  console.log('props fam', wrapper.props())
  expect(wrapper.props().metaData.characteristics.Fit.id).toEqual(50505)
  expect(wrapper.props().metaData.product_id).toEqual(23443)
  expect(wrapper.props().metaData.recommended.true).toEqual('22')
  expect(wrapper.props().productName).toEqual('product name')
})


test('Test validate form called when submit button clicked', () => {
  const props = {
    metaData: {
      characteristics: {
        Fit: {
          id: 50505,
          value: '3.94'
        }
      },
      product_id: 23443,
      ratings: {
        0: '1',
        1: '2',
        2: '4',
        3: '4',
        4: '4',
        5: '5'
      },
      recommended: {
        false: '25',
        true: '22'
      }
    },
    productName: 'product name'
  }
  const e = {
    preventDefault: jest.fn()
  }

  const wrapper = mount(<NewReview metaData={props.metaData} productName={props.productName}/>);

  wrapper.instance().validateForm = jest.fn();
  wrapper.update();
  wrapper.instance().handleSubmit(e)


  expect(wrapper.instance().validateForm).toHaveBeenCalledTimes(1);
});

test('validate form should check state and return true if state is good', () => {
  const props = {
    metaData: {
      characteristics: {
        Fit: {
          id: 50505,
          value: '3.94'
        }
      },
      product_id: 23443,
      ratings: {
        0: '1',
        1: '2',
        2: '4',
        3: '4',
        4: '4',
        5: '5'
      },
      recommended: {
        false: '25',
        true: '22'
      }
    },
    productName: 'product name'
  }
  const e = {
    preventDefault: jest.fn()
  }

  const wrapper = mount(<NewReview metaData={props.metaData} productName={props.productName}/>);

  wrapper.setState({
    summary:'this is my summary',
    body: 'this is my body this is my body this is my body this is my body this is my body this is my body this is my body this is my body this is my body this is my body this is my body this is my body this is my body',
    email: 'this is my email',
    name: 'name',
    recommend: true,
    rating: 5,
    chars: {
      Fit: {
        id: 23404
      }
    }
  })

  wrapper.update();
  wrapper.instance().validateForm();
  expect(wrapper.instance().validateForm()).toBeTruthy();
});

test('validate form should check state and return false if body is not valid', () => {
  const props = {
    metaData: {
      characteristics: {
        Fit: {
          id: 50505,
          value: '3.94'
        }
      },
      product_id: 23443,
      ratings: {
        0: '1',
        1: '2',
        2: '4',
        3: '4',
        4: '4',
        5: '5'
      },
      recommended: {
        false: '25',
        true: '22'
      }
    },
    productName: 'product name'
  }
  const e = {
    preventDefault: jest.fn()
  }

  const wrapper = mount(<NewReview metaData={props.metaData} productName={props.productName}/>);

  wrapper.setState({
    summary:'this is my summary',
    body: 'this',
    email: 'this is my email',
    name: 'name',
    recommend: true,
    rating: 5,
    chars: {
      Fit: {
        id: 23404
      }
    }
  })

  wrapper.update();
  wrapper.instance().validateForm()
  expect(wrapper.instance().validateForm()).toBeFalsy();
});



//   const wrapper = mount(<NewReview performSearch={() => {}} />);
//   wrapper.find("#email").simulate("change", {
//     target: { name: "email", value: "email" }
//   });
//   expect(wrapper.state().email).toEqual("email");
//   expect(wrapper.find("#email").props().value).toEqual("email");
// })


// test("body text is updated", () => {
//   const wrapper = mount(<NewReview performSearch={() => {}} />);
//   wrapper.find("#body").simulate("change", {
//     target: { name: "body", value: "body" }
//   });
//   expect(wrapper.state().body).toEqual("body");
//   expect(wrapper.find("#body").props().value).toEqual("body");
// })


// test("name text is updated", () => {
//   const wrapper = mount(<NewReview performSearch={() => {}} />);
//   wrapper.find("#name").simulate("change", {
//     target: { name: "name", value: "name" }
//   });
//   expect(wrapper.state().name).toEqual("name");
//   expect(wrapper.find("#name").props().value).toEqual("name");
// })

// test("summary text is updated", () => {
//   const wrapper = mount(<NewReview performSearch={() => {}} />);
//   wrapper.find("#summary").simulate("change", {
//     target: { name: "summary", value: "summary" }
//   });
//   expect(wrapper.state().summary).toEqual("summary");
//   expect(wrapper.find("#summary").props().value).toEqual("summary");
// })