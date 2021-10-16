export const GET_MEMBERS = "GET_MEMBERS";
import axios from "axios";
import { BASE_URL } from "../config";

export const getMembers = () => {
  try {
    return async (dispatch) => {
      const response = await axios.get(`${BASE_URL}members`);
      if (response.data) {
        dispatch({
          type: GET_MEMBERS,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API Base url!");
      }
    };
  } catch (error) {
    console.log(error);
  }
};
