import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name : 'token',
    initialState : {
        token_message : ''
    },
    reducers : {
        tokenSuccess: (state, action) => {
            state.token_message = action.payload
        }
    }
})

export const SelectionTest = (state) => state.token.token_message

export default tokenSlice.reducer

const { tokenSuccess } = tokenSlice.actions

export const ScannedToken = (data) => async dispatch => {
    try {
        await dispatch(tokenSuccess(data))
    } catch (error) {
        return console.log(error.message)
    }
}