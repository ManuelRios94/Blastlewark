import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Footer from './Footer';

const setUp = (props={}) => {
  const component = shallow(<Footer {...props}/>);
  return component
}

describe('<Footer />', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('It should render without crashing', () => {
    const wrapper = component.find('.Footer')

    expect(wrapper.length).to.equal(1); 
  });

});