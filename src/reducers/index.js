import { combineReducers } from "redux";
import reducers from "./reducers";
import testReducer from "./testReducer";

export default combineReducers({
  smb: reducers,
  test: testReducer,
});
