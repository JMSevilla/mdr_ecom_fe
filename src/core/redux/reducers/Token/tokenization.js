import { createSlice } from "@reduxjs/toolkit";
import FormService from "../../../service/apiservice";

const initialState = {
  token_message: "",
};

const tokenizationSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    TOKENSCANNED_FULFILLED: (state, action) => {
      console.log(action.payload);
      state.token_message = action.payload;
    },
  },
});

export default tokenizationSlice.reducer;

const { TOKENSCANNED_FULFILLED } = tokenizationSlice.actions;

export const Tokenscanning = (id) => (dispatch) => {
  FormService.USER_checkLogin(id).then((res) => {
    dispatch(TOKENSCANNED_FULFILLED(res.data));
  });
};
