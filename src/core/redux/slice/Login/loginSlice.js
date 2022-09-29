import { createSlice } from "@reduxjs/toolkit";
import FormService from '../../../service/apiservice'

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
        FormService.CLIENT_CONFIG_checkLogin(object)
        .then(
            res => { 
                dispatch(loginOnSuccess(res.data))
            }
        )
    } catch (error) {
        console.log(error)
    }
}