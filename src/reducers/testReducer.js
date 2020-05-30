import { SET_ALL } from "../reducers/identifiers";

const initialState = {
  SBMDataList: [],
};

export const sbmReducer = (state = initialState, action) => {
  switch (action.type) {
    case "looding":
      return {
        looding: true,
        SBMDataList: [],
      };
    case SET_ALL:
      return {
        looding: false,
        SBMDataList: action.data,
      };
  }
};
