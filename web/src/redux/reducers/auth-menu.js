import { SHOW_VIEW } from "@/redux/constants/auth-menu";
const initalState = "";

export const authMenuReducer = (state = initalState, action) => {
  switch (action.type) {
    case SHOW_VIEW:
      return;
    default:
      return state;
  }
};
