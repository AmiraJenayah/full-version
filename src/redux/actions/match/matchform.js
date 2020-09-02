import axios from "axios";

export const addMatch = (
  competitionId,
  journee,
  equipe_id,
  adversaire,
  joue_a,
  extra_time,
  terrain,
  arbitre
) => {
  return (dispatch) => {
    axios
      .post("http://localhost:8000/api/match", {
        competitionId: competitionId,
        journee: journee,
        equipe_id: equipe_id,
        adversaire: adversaire,
        joue_a: joue_a,
        extra_time: extra_time,
        terrain: terrain,
        arbitre: arbitre,
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
