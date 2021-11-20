import { GET_APP_DATA } from "./actionTypes";

const initialState = {
  appData: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_APP_DATA) {
    state.appData = action.payload;
  }
  return state;
}

export default rootReducer;
