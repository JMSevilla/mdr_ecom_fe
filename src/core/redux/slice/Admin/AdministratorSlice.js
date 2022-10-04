import { createSlice } from "@reduxjs/toolkit";
import FormService from '../../../service/apiservice'
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
        FormService.ADMINISTRATOR_checkadmin()
        .then(res => {
            dispatch(scanSuccess(res.data))
        })
    } catch (error) {
        console.log("Scanning" , error)
    }
}