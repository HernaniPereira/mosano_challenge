export const GET_MEMBERS = "GET_MEMBERS";
export const GET_DETAILS = "GET_DETAILS";
export const POST_MEMBER = "POST_MEMBER";
export const DELETE_MEMBER = "DELETE_MEMBER";
export const EDIT_MEMBER = "EDIT_MEMBER";
export const SIGN_IN = "SIGN_IN";
export const LOAD_USER = "LOAD_USER";
export const LOGOUT = "LOGOUT";
export const SET_INITIAL_STATE = "SET_INITIAL_STATE";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const postMember = (member) => {
  return async (dispatch) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(`${BASE_URL}members`, member, header);
      if (response.status === 200) {
        Alert.alert("merda");

        dispatch({ type: POST_MEMBER, data: response.data });
        dispatch({ type: SHOW_MODAL, data: true });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const editMember = (member) => {
  return async (dispatch) => {
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.put(
        `${BASE_URL}members/${member.id}`,
        member,
        header
      );
      if (response.status === 200) {
        dispatch({ type: EDIT_MEMBER, data: response.data });
        getMembers();
      }
    } catch (error) {
      console.log("update error", error);
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
        dispatch({ type: DELETE_MEMBER, data: response.data.id });
        getMembers();
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const login = (data) => (dispatch) => {
  if (data.username === "Admin" || data.password === "Admin") {
    saveLogin(data.username);
    dispatch({ type: SIGN_IN, payload: data.username });
  }
};

const saveLogin = async (data) => {
  try {
    await AsyncStorage.setItem("user", data);
  } catch (error) {
    console.log(error);
  }
};

export const loadLogin = (data) => (dispatch) => {
  console.log("data", data);
  dispatch({ type: LOAD_USER, payload: data });
};

export const logout = () => (dispatch) => {
  userLogout();
  dispatch({ type: LOGOUT });
};

const userLogout = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};

export const signOutUser = () => (dispatch) => {
  dispatch({ type: SET_INITIAL_STATE });
};

export const showModal = () => (dispatch) => {
  dispatch({ type: SHOW_MODAL });
};
export const hideModal = () => (dispatch) => {
  dispatch({ type: HIDE_MODAL });
};
