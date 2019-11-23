import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Smurfs from "./Smurfs.js";
import { fetchData } from "../actions";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {props.isFetching && <p>LOADING</p>}
      <Smurfs data={props.data} />
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

export default connect(mapStateToProps, { fetchData })(App);
