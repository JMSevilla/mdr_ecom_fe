import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../actions/Action";
import {sliceConfig} from '../config'
import Process from '../../../service/data_process'

const initialState = { 
    logon_message : ''
}

const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers: {
        loginOnSuccess: (state, action) => {
            state.logon_message = action.payload
        }
    }
})

const { loginOnSuccess } = loginSlice.actions
export default loginSlice.reducer

export const loginProcess = (object) => (dispatch) => {
    try {
        return dispatch(
            apiCallBegan({
                url : sliceConfig.urlhandler('applogin'),
                method : sliceConfig.methodhandler('POST'),
                data : Process.CLIENT_user_login(object),
                onSuccess : loginOnSuccess.type
            })
        )
    } catch (error) {
        console.log(error)
    }
}