import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from './App';
import Header from './shared/Header/Header';
import Content from './shared/Content/Content';
import Footer from './shared/Footer/Footer';

const setUp = (props={}) => {
  const component = shallow(<App {...props}/>);
  return component
}

describe('<App />', () => {

  let component;
  beforeEach(() => {
    const props = {
      children: <div>Test</div>
    }
    component = setUp(props);
  })

  it('It should render without crashing', () => {
    const wrapper = component.find('.App')

    expect(wrapper.length).to.equal(1); 
  });

  it('It should have a header', () => {
    expect(component.find(Header)).to.have.lengthOf(1);
  });

  it('It should have a content', () => {
    expect(component.find(Content)).to.have.lengthOf(1);
  });

  it('It should have a footer', () => {
    expect(component.find(Footer)).to.have.lengthOf(1);
  });

});
