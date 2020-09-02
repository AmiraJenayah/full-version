// import * as firebase from "firebase/app"
import { history } from "../../../history"
//import "firebase/auth"
//import "firebase/database"
import axios from "axios"

/* 
export const loginWithFB = () => {
  return dispatch => {
    let provider = new firebase.auth.FacebookAuthProvider()
    provider.setCustomParameters({
      display: "popup"
    })
 //   firebaseAuth
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        let token = result.credential.accessToken,
          // The signed-in user info.
          user = result.user.email
        dispatch({
          type: "LOGIN_WITH_FB",
          payload: {
            user,
            token,
            loggedInWith: "firebase"
          }
        })
        if (user) history.push("/")
      })
      .catch(error => {
        console.log(error)
      })
  }
} */
/* 
export const loginWithTwitter = () => {
  return dispatch => {
    let provider = new firebase.auth.TwitterAuthProvider()
    //firebaseAuth
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken,
          user = result.user.email,
          name = result.user.displayName,
          photoUrl = result.user.photoURL
        dispatch({
          type: "LOGIN_WITH_TWITTER",
          payload: {
            user,
            name,
            photoUrl,
            token,
            loggedInWith: "firebase"
          }
        })
        history.push("/")
      })
      .catch(function(error) {
        console.log(error)
      })
  }
} */

/* export const loginWithGoogle = () => {
  return dispatch => {
    let provider = new firebase.auth.GoogleAuthProvider()
  //  firebaseAuth
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken,
          user = result.user.email,
          name = result.user.displayName,
          photoUrl = result.user.photoURL
        dispatch({
          type: "LOGIN_WITH_GOOGLE",
          payload: {
            email: user,
            name: name,
            photoUrl,
            token,
            loggedInWith: "firebase"
          }
        })
        history.push("/")
      })
      .catch(function(error) {
        console.log(error)
      })
  }
} */
/* 
export const loginWithGithub = () => {
  return dispatch => {
    let provider = new firebase.auth.GithubAuthProvider()
    //firebaseAuth
      .signInWithPopup(provider)
      .then(function(result) {
        let token = result.credential.accessToken,
          user = result.user.email,
          name = result.additionalUserInfo.username,
          photoUrl = result.user.photoURL

        dispatch({
          type: "LOGIN_WITH_GITHUB",
          payload: {
            user,
            name,
            photoUrl,
            token,
            loggedInWith: "firebase"
          }
        })
        history.push("/")
      })
      .catch(function(error) {
        console.log(error)
      })
  }
} */

export const loginWithJWT = user => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/api/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        var loggedInUser;

        if (response.data) {
          loggedInUser = response.data.user;

          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" },
          });

          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  }
}

export const logoutWithJWT = () => {
  return dispatch => {
    dispatch({ type: "LOGOUT_WITH_JWT", payload: {} })
    history.push("/pages/login")
  }
}



export const changeRole = role => {
  return dispatch => dispatch({ type: "CHANGE_ROLE", userRole: role })
}
