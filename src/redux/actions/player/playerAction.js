import axios from "axios";

export const getPlayer = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8000/api/joueurs")
      .then((response) => {
        console.log(response);
        dispatch({
          type: "GET_PLAYER",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};



export const addPlayer = (joueur) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/joueur", {
        first_name: joueur.first_name,
        last_name: joueur.last_name,
        birthday: joueur.birthday,

        email: joueur.email,
        numero_tenue: joueur.numero_tenue,
        hauteur: joueur.hauteur,
        etatdeSante: joueur.etatdeSante,
        poids: joueur.poids,
        salaire: joueur.salaire,
        primes: joueur.primes,
      })
      .then((response) => {
        dispatch({
          type: "ADD_PLAYER",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
