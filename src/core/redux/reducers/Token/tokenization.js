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
      state.token_message = action.payload
      console.log(state.token_message)
    }
  },
});

const { TOKENIZATION_FULFILLED } = tokenizationSlice.actions

export default tokenizationSlice.reducer;

export const Tokenscanning = (id) => (dispatch) => {
  var data = new FormData()
  data.append('userid', id)
  return dispatch(
    apiCallBegan({
      url: 'get-token',
      method: 'POST',
      data : data,
      onSuccess : TOKENIZATION_FULFILLED.type
    })
  )
}
