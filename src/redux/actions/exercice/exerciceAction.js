import axios from "axios";

export const addexercice = (exercice) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/exercice", {
        ExName: exercice.ExName,
        type: exercice.type,
        Duree: exercice.Duree,
        activite: exercice.activite,

       
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
