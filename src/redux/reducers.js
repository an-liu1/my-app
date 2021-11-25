import { SWITCH_LOADING, SWITCH_NAV, GET_APP_DATA } from "./actionTypes";

const initialState = {
  loading: false,
  navKey: "/",
  appData: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === SWITCH_LOADING) {
    return Object.assign({}, state, { loading: action.payload });
  }
  if (action.type === SWITCH_NAV) {
    return Object.assign({}, state, { navKey: action.payload });
  }
  if (action.type === GET_APP_DATA) {
    return Object.assign({}, state, { appData: action.payload });
  }
  return state;
}

export default rootReducer;
