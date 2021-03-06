import { combineReducers } from "redux"
import calenderReducer from "./calendar/"
import emailReducer from "./email/"
import chatReducer from "./chat/"
import todoReducer from "./todo/"
import customizer from "./customizer/"
import auth from "./auth/"
import navbar from "./navbar/Index"
import dataList from "./data-list/"
import matchReducer from "./match/matchReducer"
import playerReducer from "./player/playerReducer"
import exerciceReducer from "./exercice/exerciceReducer"
import resultReducer from "./result/resultReducer"
import compReducer from "./comp/compReducer";
import entrainementReducer from "./entrainement/entrainementReducer";

;

const rootReducer = combineReducers({
  calendar: calenderReducer,
  emailApp: emailReducer,
  todoApp: todoReducer,
  chatApp: chatReducer,
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  dataList: dataList,
  match: matchReducer,
  player: playerReducer,
  exercice: exerciceReducer,
  result: resultReducer,
  compReducer: compReducer,
});

export default rootReducer
