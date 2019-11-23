import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchData = () => (dispatch) => {
  dispatch({ type: FETCH_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
