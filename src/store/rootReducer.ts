import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./dark-mode/reducer";

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
});

export default rootReducer;