import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TableComponent from './TableComponent';
import ReactTable from "react-table";

const setUp = (props={}) => {
  const component = shallow(<TableComponent {...props}/>);
  return component
}

describe('<TableComponent />', () => {

  let component;
  beforeEach(() => {
    // const props = {
    //   children: <div>Test</div>
    // }
    component = setUp(props);
  })

  it('It should render without crashing', () => {
    const wrapper = component.find('.Table')

    expect(wrapper.length).to.equal(1); 
  });

  it('It should have a react table', () => {
    expect(component.find(ReactTable)).to.have.lengthOf(1);
  });

});
