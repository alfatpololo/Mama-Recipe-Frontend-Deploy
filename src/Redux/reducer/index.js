import recipeReducer from "./recipe";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  recipe: recipeReducer,
  idrecipe: recipeReducer
});

export default rootReducer;