import {
  GET_MEMBERS,
  GET_DETAILS,
  POST_MEMBER,
  EDIT_MEMBER,
  DELETE_MEMBER,
  SET_INITIAL_STATE,
  SIGN_IN,
  LOAD_USER,
  LOGOUT,
} from "./actions";

const initialState = {
  members: [],
  loading: true,
  user: null,
};

function membersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return { ...state, members: action.payload, loading: false };

    case POST_MEMBER:
      let { member } = action.data;
      const members = [member, ...state.members];
      return { ...state, members: members };
    case DELETE_MEMBER:
      console.log("reducer", action.data);
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.data),
      };
    case EDIT_MEMBER:
      return { ...state, member: action.payload };
    case SIGN_IN:
      return { ...state, user: action.payload };
    case LOAD_USER:
      return { ...state, user: action.payload };
    case SET_INITIAL_STATE:
      return { ...state, ...initialState };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
export default membersReducer;
