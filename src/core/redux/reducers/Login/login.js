import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../actions/Actions";
import Process from '../../../service/data_process'

const initialState = {
  logon_message: "",
  signout_message : ''
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    LOGIN_FULFILLED: (state, action) => {
      state.logon_message = action.payload;
    },
    SIGNOUT_FULFILLED: (state, action) => {
      state.signout_message = action.payload
    }
  },
});

export default loginSlice.reducer;

const { LOGIN_FULFILLED, SIGNOUT_FULFILLED } = loginSlice.actions;

export const SIGNOUT_PROCESS = (object) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url : 'signout/',
      method: 'POST',
      data: Process.ADMIN_SIGNOUT(object),
      onSuccess: SIGNOUT_FULFILLED.type
    })
  )
}

export const LOGIN_ONPROCESS = (object) => (dispatch) => {
  return dispatch(
    apiCallBegan({
      url : 'applogin',
      method : 'POST',
      data : Process.CLIENT_user_login(object),
      onSuccess: LOGIN_FULFILLED.type
    })
  )
};
