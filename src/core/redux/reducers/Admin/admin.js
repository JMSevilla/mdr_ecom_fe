import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FormService from "../../../service/apiservice";
import { apiCallBegan } from "../../actions/Actions";
import Process from '../../../service/data_process'

const initialState = {
  admin_message: "",
  admin_registration_onsuccess : ''
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    ADMIN_REGISTRATION_FULFILLED: (state, action) => {
      state.admin_registration_onsuccess = action.payload
    }
  },
  extraReducers : (builder) => {
    builder.addCase(ADMIN_SCANNING.fulfilled, (state, action) => {
      state.admin_message = action.payload
    })
  }
});

export default adminSlice.reducer;

const { ADMIN_REGISTRATION_FULFILLED } = adminSlice.actions

export const ADMIN_REGISTER = (object) => (dispatch) => {
  return dispatch(
      apiCallBegan({
        url : 'admin-registration-entry',
        method : 'POST',
        data : Process.ADMIN_user_entry(object),
        onSuccess : ADMIN_REGISTRATION_FULFILLED.type
      })
  )
}

export const ADMIN_SCANNING = createAsyncThunk(
  'admin/fetch-exist-admin',
  async () => {
    const response = await FormService.ADMINISTRATOR_checkadmin()
    return response.data
  }
)