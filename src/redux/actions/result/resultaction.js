import axios from "axios";

export const addResult = (match) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/match", {
        result: match.result,
        score: match.score,
      })
      .then((response) => {
        dispatch({
          type: "ADD_RESULT",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
