import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../../actions/Action";
import { sliceConfig } from "../config";
const initialState = {
    check_admin_message : ''
}

const administratorSlice = createSlice({
    name : 'admin',
    initialState,
    reducers : {
        scanSuccess : (state, action) => {
            state.check_admin_message = action.payload
        }
    }
})

const { scanSuccess } = administratorSlice.actions
export default administratorSlice.reducer

export const scanProcess = () => dispatch => {
    try {
        return dispatch(
            apiCallBegan({
                url: sliceConfig.urlhandler('check-admin'),
                method : sliceConfig.methodhandler('GET'),
                onSuccess: scanSuccess.type
            })
        )
    } catch (error) {
        console.log("Scanning" , error)
    }
}