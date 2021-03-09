import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';

import RelatedItems from './component/RelatedItems.jsx';
import RelatedGallery from './component/RelatedGallery.jsx';
import OutfitGallery from './component/OutfitGallery.jsx';
import PreviewImage from './component/PreviewImage.jsx';
import ProductInformation from './component/ProductInformation.jsx';
import ComparisonModal from './component/ComparisonModal.jsx';
import CompareButton from './component/CompareButton.jsx';
import testDummyData from './TestDummyData.js';

describe('<RelatedItems/>', () => {
  it('renders one <RelatedGallery/> component', () => {
    const wrapper = shallow(<RelatedItems/>);
    expect(wrapper.find(RelatedGallery)).toHaveLength(1);
  });

  it('renders one <OutfitGallery/> component', () => {
    const wrapper = shallow(<RelatedItems/>);
    expect(wrapper.find(OutfitGallery)).toHaveLength(1);
  });

  it('renders a `.widgetContainer`', () => {
    const wrapper = shallow(<RelatedItems/>);
    expect(wrapper.find('.widgetContainer')).toHaveLength(1);
  });

  it('renders related items and your outfit section titles `.relatedItemsBanner`', () => {
    const wrapper = shallow(<RelatedItems/>);
    expect(wrapper.find('.relatedItemsBanner')).toHaveLength(2);
  })

  it('calls componentDidMount', () => {
    sinon.spy(RelatedItems.prototype, 'componentDidMount');
    const wrapper = mount(<RelatedItems/>);
    expect(RelatedItems.prototype.componentDidMount).toHaveProperty('callCount', 1);
    RelatedItems.prototype.componentDidMount.restore();
  })
})

describe('<PreviewImage/>', () => {
  it('renders a `.previewImage`', () => {
    const wrapper = shallow(<PreviewImage currentItem={testDummyData.currentItem} relatedItem={testDummyData.relatedItems[0]}/>);
    expect(wrapper.find('.previewImage')).toHaveLength(1);
  })

  it('calls componentDidMount', () => {
    sinon.spy(PreviewImage.prototype, 'componentDidMount');
    const wrapper = mount(<PreviewImage currentItem={testDummyData.currentItem} relatedItem={testDummyData.relatedItems[0]}/>);
    expect(PreviewImage.prototype.componentDidMount).toHaveProperty('callCount', 1);
    PreviewImage.prototype.componentDidMount.restore();
  })
})

describe('ProductInformation/>', () => {
  it('renders a `.productInformationContainer`', () => {
    const wrapper = shallow(<ProductInformation relatedItem={testDummyData.relatedItems[0]}/>);
    expect(wrapper.find('.productInformationContainer')).toHaveLength(1);
  })

  it('calls componentDidMount', () => {
    sinon.spy(ProductInformation.prototype, 'componentDidMount');
    const wrapper = mount(<ProductInformation relatedItem={testDummyData.relatedItems[0]}/>);
    expect(ProductInformation.prototype.componentDidMount).toHaveProperty('callCount', 1);
    ProductInformation.prototype.componentDidMount.restore();
  })
})

describe('<CompareButton/>', () => {
  it('renders one <ComparisonModal/> component', () => {
    const wrapper = shallow(<CompareButton/>);
    expect(wrapper.find(ComparisonModal)).toHaveLength(1);
  })
})

describe('<ComparisonModal/>', () => {
  it ('calls componentDidMount', () => {
    sinon.spy(ComparisonModal.prototype, 'componentDidMount');
    const wrapper = mount(<ComparisonModal currentItem={testDummyData.currentItem} relatedItem={testDummyData.relatedItems[0]}/>);
    expect(ComparisonModal.prototype.componentDidMount).toHaveProperty('callCount', 1);
    ComparisonModal.prototype.componentDidMount.restore();
  })

  it('renders an `.comparisonModalMain`', () => {
    const wrapper = shallow(<ComparisonModal show={true} currentItem={testDummyData.currentItem} relatedItem={testDummyData.relatedItems[0]}/>);
    expect(wrapper.find('.comparisonModalMain')).toHaveLength(1);
  });
})