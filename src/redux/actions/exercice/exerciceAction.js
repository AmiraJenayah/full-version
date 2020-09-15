import axios from "axios";

export const addexercice = (exercice) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/exercice", {
        ExName: exercice.ExName,
        temps: exercice.temps,
        exercice_theme: exercice.exercice_theme,
        nb_series: exercice.nb_series,
        difficulte: exercice.difficulte,
        phase_jeu: exercice.phase_jeu,
        repos_series: exercice.repos_series,
        objectif: exercice.objectif,
        consignes: exercice.consignes,
        realisation: exercice.realisation,
      })
      .then((response) => {
        dispatch({
          type: "ADD_EXERCICE",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
