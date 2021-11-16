import { combineReducers } from "@reduxjs/toolkit";
import darkModeReducer from "./dark-mode/reducer";
import {filesReducer} from "./files/files"

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

export default rootReducer;