import axios from "axios";

export const getEntrainement = () => {
         return (dispatch) => {
           axios
             .get("http://127.0.0.1:8000/api/entrainements")
             .then((response) => {
               console.log(response);
               dispatch({
                 type: "GET_ENTRAINEMENT",
                 payload: response.data,
               });
             })
             .catch((error) => {
               console.log(error);
             });
         };
       };

export const addEntrainement = (entrainement) => {
         return (dispatch) => {
           axios
             .post("http://127.0.0.1:8000/api/entrainement", {
               EntName: entrainement.EntName,
               Period: entrainement.Period,
               Lieu: entrainement.Lieu,
               Horaire: entrainement.Horaire,
               Nb_exercice: entrainement.Nb_exercice,
             })
             .then((response) => {
               dispatch({
                 type: "ADD_ENTRAINEMENT",
                 payload: response.data,
               });
             })
             .catch((error) => {
               console.log(error);
             });
         };
       };
