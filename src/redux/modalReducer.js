import { SHOW_MODAL, HIDE_MODAL } from "./actions";

const initialState = {
  modal: false,
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { modal: true };
    case HIDE_MODAL:
      return { modal: false };
    default:
      return state;
  }
}

export default modalReducer;
