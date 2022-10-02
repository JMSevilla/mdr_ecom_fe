import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../actions/Action";
import {sliceConfig} from '../config'
import Process from '../../../service/data_process'
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
        return dispatch(
            apiCallBegan({
                url : sliceConfig.urlhandler('get-token'),
                method : sliceConfig.methodhandler('POST'),
                data: Process.USER_checktokenization(id),
                onSuccess: tokenSuccess.type
            })
        )
    } catch (error) {
        return console.log(error.message)
    }
}