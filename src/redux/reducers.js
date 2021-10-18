import { GET_MEMBERS } from "./actions";
import { GET_DETAILS } from "./actions";
import { POST_MEMBER } from "./actions";
import { DELETE_MEMBER } from "./actions";

const initialState = {
  members: [],
};

function membersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MEMBERS:
      return { ...state, members: action.payload };

    case GET_DETAILS:
      return {
        ...state,
        member: state.members.filter((item) => item.id == action.payload),
      };
    case POST_MEMBER:
      let { member } = action.data;
      const members = [member, ...state.members];
      return { ...state, members: members };
    case DELETE_MEMBER:
      return {
        ...state,
        members: state.members.filter(
          (member) => member.id !== action.payload.id
        ),
      };
    /* case GET_DETAIL:
      return {
        ...state,
        detailMember: state.members.filter((item) => item.id == action.payload),
      }; */
    default:
      return state;
  }
}

export default membersReducer;
