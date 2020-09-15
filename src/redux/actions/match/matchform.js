import axios from "axios";

export const addMatch = (match) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/match", {
        matchName: match.matchName,
        adversaire: match.adversaire,
        joue_a: match.joue_a,
        journee: match.journee,
        terrain: match.terrain,
        arbitre: match.arbitre,
        equipe_id: match.equipe_id,
        extra_time: match.extra_time,
        
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
