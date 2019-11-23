import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData, submitForm } from "../actions";

import "./App.css";

import Smurfs from "./Smurfs.js";
import Form from "./Form.js";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {props.isFetching && <p>LOADING</p>}
      <Smurfs data={props.data} />
      <Form submitForm={props.submitForm} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchData, submitForm })(App);
