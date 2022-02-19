import React from "react";
import MyTime from "./MyTime";
import PropTypes from "prop-types";
import TimeActionCreator from "../redux/TimeActionCreator";
import { connect } from "react-redux";

const Home = ({ currentTime, changeTime, isChanging }) => {
  return (
    <div className="card card-body">
      <h2>Home</h2>
      <hr />
      {isChanging ? <h4>시간 변경중</h4> : <MyTime currentTime={currentTime} changeTime={changeTime} />}
    </div>
  );
};
Home.propTypes = {
  currentTime: PropTypes.object.isRequired,
  isChanging: PropTypes.bool.isRequired,
  changeTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentTime: state.home.currentTime,
  isChanging: state.home.isChanging,
});

const mapDispatchToProps = (dispatch) => ({
  changeTime: () => dispatch(TimeActionCreator.asyncChangeTime()),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
