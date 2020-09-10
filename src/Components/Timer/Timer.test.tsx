import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Timer from "./Timer";

configure({ adapter: new Adapter() });

describe("Timer", () => {
  it("Should render a <div/>", () => {
    let container = shallow(<Timer />);
    expect(container.find("div").length).toEqual(1);
  });
});
