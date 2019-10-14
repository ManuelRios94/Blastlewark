import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { NotificationContainer } from './NotificationContainer';

const setUp = (props={}) => {
  const component = shallow(<NotificationContainer {...props}/>);
  return component
}

describe('<App />', () => {

  let component;
  beforeEach(() => {
    const props = {
      notification: {}
    }
    component = setUp(props);
  })

  it('It should render without crashing', () => {
    expect(component.length).to.equal(1); 
  });

});