import { createSlice } from "@reduxjs/toolkit";
import FormService from "../../../service/apiservice";

const initialState = {
  admin_message: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    ADMINSCANNED_FULFILLED: (state, action) => {
      console.log(action.payload);
      state.admin_message = action.payload;
    },
  },
});

export default adminSlice.reducer;

const { ADMINSCANNED_FULFILLED } = adminSlice.actions;

export const ADMIN_SCANNING = () => (dispatch) => {
  FormService.ADMINISTRATOR_checkadmin().then((res) => {
    dispatch(ADMINSCANNED_FULFILLED(res.data));
  });
};
