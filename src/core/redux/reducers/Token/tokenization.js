import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FormService from "../../../service/apiservice";
import { apiCallBegan } from "../../actions/Actions";

const initialState = {
  token_message: "",
};

const tokenizationSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    TOKENIZATION_FULFILLED: (state, action) => {
      state.token_message = action.payload;
    },
  },
});

const { TOKENIZATION_FULFILLED } = tokenizationSlice.actions;

export default tokenizationSlice.reducer;

export const Tokenscanning = (id, token) => (dispatch) => {};
