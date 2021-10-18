export const GET_MEMBERS = "GET_MEMBERS";
export const GET_DETAILS = "GET_DETAILS";
export const POST_MEMBER = "POST_MEMBER";
export const DELETE_MEMBER = "DELETE_MEMBER";

import axios from "axios";
import { BASE_URL } from "../config";
import { MyToast } from "../components/MyToast";
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

export const postMember = (member) => {
  return async () => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(`${BASE_URL}members`, member, header);
      if (response.status === 200) {
        MyToast("Member added");

        dispatch({ type: POST_MEMBER, data: response.data.quote });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleteMember = (id) => {
  return async (dispatch) => {
    const header = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.delete(
        `${BASE_URL}members/${id}`,
        {},
        header
      );
      if (response.status === 200) {
        console.log(response);
        dispatch({ type: DELETE_MEMBER, data: { id } });
        getMembers();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const detailsMember = (id) => (dispatch) => {
  dispatch({
    type: GET_DETAILS,
    payload: id,
  });
};
