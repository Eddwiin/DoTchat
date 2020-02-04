import { SHOW_VIEW } from "@/redux/constants/auth-menu";
const initalState = "";

const authMenuReducer = (state = initalState, action) => {
  switch (action.type) {
    case SHOW_VIEW:
      return;
    default:
      return state;
  }
};

export default authMenuReducer;
