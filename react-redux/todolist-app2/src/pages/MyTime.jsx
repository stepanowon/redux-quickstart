import React from "react";
import PropTypes from "prop-types";

const MyTime = ({ currentTime, changeTime }) => {
  return (
    <div className="row">
      <div className="col">
        <button className="btn btn-primary" onClick={() => changeTime()}>
          현재 시간 확인
        </button>
        <h4>
          <span className="label label-default">{currentTime.toLocaleString()}</span>
        </h4>
      </div>
    </div>
  );
};

MyTime.propTypes = {
  currentTime: PropTypes.object.isRequired,
  changeTime: PropTypes.func.isRequired,
};

export default MyTime;
