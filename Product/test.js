import React from 'react';
import { shallow, mount, toJson } from 'enzyme';
import Product from './component/Product.jsx';
import Gallery from './component/PGallery.jsx';
import Info from './component/PInfo.jsx';
import Thumbnail from './component/Thumbnail.jsx';
import DownArrow from './component/DownArrow.jsx';
import TopArrow from './component/TopArrow.jsx';
import NameAndPrice from './component/NameAndPrice.jsx'
import Style from './component/Style.jsx';
import Option from './component/Option.jsx';
import FeatureList from './component/FeatureList.jsx';
import Feature from './component/Feature.jsx'
import OptionQ from './component/OptionQ.jsx';
import Checkout from './component/Checkout.jsx';



// RENDERING and SNAPSHOTS
describe('Product', () => {
  let wrapper;

  it('renders correctly', () => {
    wrapper = shallow(<Product />);
  });

  it('renders Gallery', () => {
    expect(wrapper.containsMatchingElement(<Gallery />)).toBe(true);
  });

  it('renders Info section', () => {
    expect(wrapper.containsMatchingElement(<Info />)).toBe(true);
  });

})


describe('Thumbnail', () => {
  it('renders correctly', () => {
    shallow(<Thumbnail />)
  });
})


describe('Down Arrow and TopArrow', () => {
  it('renders correctly', () => {
    shallow(<DownArrow />)
    shallow(<TopArrow />)
  });
})


// MOCKING - DEEP TESTS
describe('Gallery Mock', () => {
  const image = "https://images.unsplash.com/photo"
  const info = {category: "Jackets", slogan:"Blend in your crowd."}
  const stylePhotos = [{thumbnail_url:"https://images.unsplash.com/photo"}]

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Gallery image={image} info={info} stylePhotos={stylePhotos}/>);
  });

  it('accepts props and passes them down', () => {
    expect(wrapper.props().image).toEqual(image);
    expect(wrapper.props().info).toEqual(info);
    expect(wrapper.props().stylePhotos).toEqual(stylePhotos);
  });

  it('contains slogan from props', () => {
    const value = wrapper.find("h3").text();
    expect(value).toEqual("Blend in your crowd.");
  });

  it('renders children with props', () => {
    expect(wrapper.containsMatchingElement(<Thumbnail />)).toBe(true);
    expect(wrapper.containsMatchingElement(<DownArrow />)).toBe(true);
  })
})


describe('Info Mock', () => {
  const style = {name:"Forest Green & Black", original_price: "140"}
  const info = {category: "Jackets", slogan:"Blend in your crowd."};
  const styles = [{style_id: 70540, photos: [{thumbnail_url:"https://images.unsplash.com/photo"}]}];
  const features = [{feature: "Fabric", value: "Canvas"}];
  const skus = [{quantity: 8, size: "XS"}]
  const isStocked = true;
  var quantity = [1,2,3,4]

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Info style={style} info={info} features={features} styles={styles} skus={skus}/>);
  });

  it('accepts props and passes them down', () => {
    expect(wrapper.props().style).toEqual(style);
    expect(wrapper.props().info).toEqual(info);
    expect(wrapper.props().styles).toEqual(styles);
    expect(wrapper.props().features).toEqual(features);
    expect(wrapper.props().skus).toEqual(skus);
  });

  it('renders children with props', () => {
    expect(wrapper.containsMatchingElement(<Style />)).toBe(true);
    expect(wrapper.containsMatchingElement(<Checkout />)).toBe(true);
  })

  it('contains reviews link', () => {
    const value = wrapper.find("a").text();
    expect(value).toEqual("Read all reviews");
  });

  // it('updates Info state', () => {
  //   const child = shallow(<Checkout />)
  //   // const instance = child.instance()
  //   expect(wrapper.state().checkoutClicked).toEqual(false)
  //   expect(wrapper.state().isStocked).toEqual(true)
  //   child.find('button').invoke('checkSizeSelected')()
  //   expect(wrapper.state().checkoutClicked).toEqual(true)
  // });
})

// MOCKING - SHALLOW
describe('OptionQ', () => {
  const quantity = "4";

  it('accepts props', () => {
    const wrapper = mount(<OptionQ quantity={quantity}/>);
    expect(wrapper.props().quantity).toEqual(quantity);
  });
})


describe('FeatureList', () => {
  const features = [{feature: "Fabric", value: "Canvas"}];

  it('contains list from props', () => {
    const wrapper = shallow(<FeatureList featureList={features}/>)
    expect(wrapper.containsMatchingElement(<Feature />)).toBe(true);
  })
})



