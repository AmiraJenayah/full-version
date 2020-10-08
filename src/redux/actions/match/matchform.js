import axios from "axios";

export const addMatch = (match) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/match", {
        matchName: match.matchName,
        adversaire: match.adversaire,
        date: match.date,
        stade: match.stade,
        arbitre: match.arbitre,
        equipe: match.equipe,
        tenue: match.tenue,
      })
      .then((response) => {
        dispatch({
          type: "ADD_MATCH",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

