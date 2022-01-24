import React from "react";
import {connect} from "react-redux";
import * as actions from "../actions"

const Counter = ({ counter, inc, dec, rdm }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn btn-primary btn-large"
              onClick={dec}>DEC</button>
      <button className="btn btn-primary btn-large"
              onClick={inc}>INC</button>
      <button className="btn btn-primary btn-large"
              onClick={rdm}>RDM</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps, actions)(Counter);