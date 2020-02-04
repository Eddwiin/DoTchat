import { UPDATE_VIEW } from "@/constants/auth_menu";

const initialState = "";

const authMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIEW:
      return state;

    default:
      return state;
  }
};

export default authMenuReducer;
