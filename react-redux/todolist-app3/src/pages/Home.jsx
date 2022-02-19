import React from "react";
import MyTime from "./MyTime";
import PropTypes from "prop-types";
import TimeActionCreator from "../redux/TimeActionCreator";
import { connect } from "react-redux";

const Home = ({ currentTime, changeTime }) => {
  return (
    <div className="card card-body">
      <h2>Home</h2>
      <MyTime currentTime={currentTime} changeTime={changeTime} />
    </div>
  );
};
Home.propTypes = {
  currentTime: PropTypes.object.isRequired,
  changeTime: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ currentTime: state.home.currentTime });
const mapDispatchToProps = (dispatch) => ({
  changeTime: () => dispatch(TimeActionCreator.changeTime()),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
