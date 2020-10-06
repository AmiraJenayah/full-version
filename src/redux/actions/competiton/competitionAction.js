import axios from "axios";

export const getComp = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8000/api/comp")
      .then((response) => {
        console.log(response);
        dispatch({
          type: "GET_COMP",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addComp = (comp) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/comp", {
        Compname: comp.Compname,
        Saison: comp.Saison,
        Number_equipe: comp.Number_equipe,
        Prix: comp.Prix,
       
      })
      .then((response) => {
        dispatch({
          type: "ADD_COMP",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
