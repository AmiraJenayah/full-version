//import * as firebase from "firebase/app"
import { history } from "../../../history"
import axios from "axios";



export const signupWithJWT = (email, password, name) => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/api/register", {
        email: email,
        password: password,
        name: name,
      })
      .then((response) => {
        var loggedInUser;

        if (response.data) {
          loggedInUser = response.data.user;

          localStorage.setItem("token", response.data.token);

          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" },
          });

          history.push("/pages/login");
        }
      })
      .catch((err) => console.log(err));

  }
}
