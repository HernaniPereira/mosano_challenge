import { GET_MEMBERS } from "./actions";

const initialState = {
  members: [],
};

function membersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return { ...state, members: action.payload };

    default:
      return state;
  }
}

export default membersReducer;
