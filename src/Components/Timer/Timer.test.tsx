import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Timer from "./Timer";
import TimerButton from "../TimerButton/TimerButton";

configure({ adapter: new Adapter() });

let container = shallow(<Timer />);
describe("Timer", () => {
  it("Should render a <div/>", () => {
    expect(container.find("div").length).toEqual(6);
  });
  it("Should render a component", () => {
    expect(container.find(TimerButton).length).toBe(3);
  });
});
