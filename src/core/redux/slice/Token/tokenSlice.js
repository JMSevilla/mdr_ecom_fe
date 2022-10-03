import { createSlice } from "@reduxjs/toolkit";
import FormService from '../../../service/apiservice'

const tokenSlice = createSlice({
    name : 'token',
    initialState : {
        token_message : ''
    },
    reducers : {
        tokenSuccess: (state, action) => {
            return {
                ...state,
                token_message : action.payload
            }
        }
    }
})


export default tokenSlice.reducer

const { tokenSuccess } = tokenSlice.actions

export const ScannedToken = (id) => async dispatch => {
    try {
        FormService.USER_checkLogin(id)
        .then(res => {
            dispatch(tokenSuccess(res.data))
        })
    } catch (error) {
        return console.log(error.message)
    }
}