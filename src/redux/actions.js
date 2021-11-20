import request from "./request";
import { GET_APP_DATA } from "./actionTypes";

export function getAPPStatistics(data) {
  return async (dispatch) => {
    let res = await request("get", "carpool/getAPPStatistics");
    dispatch({ type: GET_APP_DATA, payload: res.data });
  };
}
