import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';

const setUp = (props={}) => {
  const component = shallow(<Header {...props}/>);
  return component
}

describe('<Header />', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('It should render without crashing', () => {
    const wrapper = component.find('.Header')

    expect(wrapper.length).to.equal(1); 
  });

});