import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Timer from "../Timer/Timer";

configure({ adapter: new Adapter() });

describe("App", () => {
  let container = shallow(<App />);
  it("Should render a <div/>", () => {
    expect(container.find("div").length).toEqual(1);
  });
  it("Should render a <div/>", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
