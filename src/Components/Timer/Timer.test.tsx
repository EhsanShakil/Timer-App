import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Timer from "./Timer";
import TimerButton from "../TimerButton/TimerButton";

configure({ adapter: new Adapter() });
let props = {
  buttonAction: jest.fn(),
  buttonValue: "",
};
let wrapper = shallow(<TimerButton {...props} />);
let container = shallow(<Timer />);

describe("Timer", () => {
  it("Should render a <div/>", () => {
    expect(container.find("div").length).toEqual(6);
  });
  it("Should render a component", () => {
    expect(container.find(TimerButton).length).toBe(3);
  });
  it("Should render Minutes", () => {
    expect(container.find("div.minutes").find("p.text").text()).toBe("Minutes");
  });
  it("Should render Minutes", () => {
    expect(container.find("div.seconds").find("p.text").text()).toBe("Seconds");
  });
});
