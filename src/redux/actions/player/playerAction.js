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
        birthplace: joueur.birthplace,
        email: joueur.email,
        num_tenue: joueur.num_tenue,
        taille: joueur.taille,
        date_arrive: joueur.date_arrive,
        poids: joueur.poids,
        mutation: joueur.mutation,
        last_equipe: joueur.last_equipe,
        meilleur_pied: joueur.meilleur_pied,
        post_player: joueur.post_player,
        num_license: joueur.num_license,
        number_anneJoue: joueur.number_anneJoue,
     num_mobile  : joueur.num_mobile,
           num_fixe  : joueur.num_fixe,
            adresse  : joueur.adresse,
        code_postal  : joueur.code_postal,
               ville  : joueur.ville,
                 pays  : joueur.pays,
                speed  : joueur.speed,
          endurance  : joueur.endurance,
            tactical  : joueur.tactical,
            technical  : joueur.technical,
              attack  : joueur.attack,
              defense  : joueur.defense,






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
