import { createSlice } from "@reduxjs/toolkit";
import FormService from "../../../service/apiservice";

const initialState = {
  logon_message: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOGIN_FULFILLED: (state, action) => {
      console.log(action.payload);
      state.logon_message = action.payload;
    },
  },
});

export default loginSlice.reducer;

const { LOGIN_FULFILLED } = loginSlice.actions;

export const LOGIN_ONPROCESS = (object) => (dispatch) => {
  FormService.CLIENT_CONFIG_checkLogin(object).then((res) => {
    dispatch(LOGIN_FULFILLED(res.data));
  });
};
