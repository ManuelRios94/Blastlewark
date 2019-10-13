import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Content from './Content';

const setUp = (props={}) => {
  const component = shallow(<Content {...props}/>);
  return component
}

describe('<Content />', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('It should render without crashing', () => {
    const wrapper = component.find('.Content')

    expect(wrapper.length).to.equal(1); 
  });

});