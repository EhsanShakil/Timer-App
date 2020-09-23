import React from "react";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Timer from "./Timer";
import TimerButton from "../TimerButton/TimerButton";

configure({ adapter: new Adapter() });

let container = shallow(<Timer />);

describe("Timer", () => {
  it("Should render a <div/>", () => {
    expect(container.find("div").length).toEqual(6);
  });
  it("Should render Timer Button component 3 times", () => {
    expect(container.find(TimerButton).length).toBe(3);
  });
  it("Should render Minutes", () => {
    expect(container.find("div.minutes").find("p.text").text()).toBe("Minutes");
  });
  it("Should render Minutes Value", () => {
    expect(container.find("div.minutes").find("span").text()).toBe("00");
  });
  it("Should render Seconds", () => {
    expect(container.find("div.seconds").find("p.text").text()).toBe("Seconds");
  });

  it("Should render Seconds Value", () => {
    expect(container.find("div.seconds").find("span").text()).toBe("00");
  });
  it("Should render buttonValue Start prop", () => {
    expect(container.find(TimerButton).at(0).props().buttonValue).toBe("Start");
  });
  it("Should render buttonValue Stop prop", () => {
    expect(container.find(TimerButton).at(1).props().buttonValue).toBe("Stop");
  });
  it("Should render buttonValue Reset prop", () => {
    expect(container.find(TimerButton).at(2).props().buttonValue).toBe("Reset");
  });
  it("Should invoke start function", () => {
    expect(container.find(TimerButton).at(0).simulate("click"));
  });
});
