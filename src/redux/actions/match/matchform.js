import axios from "axios";

export const addMatch = () => {
         return (dispatch) => {
           
           axios
             .post(" http://127.0.0.1:8000/api/match", {})
              .then(response => {
            console.log(response);
             
               dispatch({
                 type: "ADD_MATCH",
                 payload: response.data,
               });
              
              
             })
             .catch((error) => {
               console.log(error);
             });
         };
        }