import React from "react";
import { shallow } from "enzyme";
import { expect } from "chai";

import { HomeContainer } from "./HomeContainer";
import { Table } from "./Table/TableComponent";
import { Menu } from "./Menu/MenuComponent";

const setUp = (props = {}) => {
  const component = shallow(<HomeContainer {...props} />);
  return component;
};

describe("<HomeContainer />", () => {
  let component;
  beforeEach(() => {
    const props = {
      localPopulation: []
    };
    component = setUp(props);
  });

  it("It should render without crashing", () => {
    expect(component.length).to.equal(1);
  });

  it("It should render a menu and a table", () => {
    expect(component.find(Table)).to.have.lengthOf(1);
    expect(component.find(Menu)).to.have.lengthOf(1);
  });
});
