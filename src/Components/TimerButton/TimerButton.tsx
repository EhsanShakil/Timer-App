import React from "react";
import "./TimerButton.css";
import PropTypes from "prop-types";

const TimerButton = ({ buttonAction, buttonValue }: any) => {
  return (
    <div onClick={buttonAction} className="buttonContainer">
      <p>{buttonValue}</p>
    </div>
  );
};
TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;
