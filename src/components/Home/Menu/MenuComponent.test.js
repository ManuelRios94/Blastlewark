import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";

import { Button } from "react-bootstrap";

import { Menu } from "./MenuComponent";

const setUp = (props = {}) => {
  const component = mount(<Menu {...props} />);
  return component;
};

describe("<Menu />", () => {
  let component;
  beforeEach(() => {
    const props = {
      localPopulation: {},
      onClick: () => {}
    };
    component = setUp(props);
  });

  it("It should render without crashing", () => {
    expect(component.length).to.equal(1);
  });

  it("It should render a button", () => {
    expect(component.find(Button)).to.have.lengthOf(1);
  });
});
