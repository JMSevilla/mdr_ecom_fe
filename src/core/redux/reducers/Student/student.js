import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import FormService from "../../../service/apiservice";
import { apiCallBegan } from "../../actions/Actions";
import Process from '../../../service/data_process'

const initialState = { 
    student_check_email_message : '',
    student_verification_email_message : '',
    student_verification_entry_message : '',
    student_verification_sent_email_message : '',
    student_verification_update_counts_message : ''
}

const studentSlice = createSlice({
    name : 'student',
    initialState,
    reducers: {
        STUDENT_CHECKEMAIL_FULFILLED : (state, action) => {
            state.student_check_email_message = action.payload
        },
        STUDENT_VERIFICATION_FULFILLED : (state, action) => {
            state.student_verification_email_message = action.payload
        },
        STUDENT_VERIFICATION_ENTRY_FULFILLED : (state, action) => {
            state.student_verification_entry_message = action.payload
        },
        STUDENT_VERIFICATION_SEND_EMAIL_FULFILLED : (state, action) => {
            state.student_verification_sent_email_message = action.payload
        },
        STUDENT_VERIFICATION_UPDATE_COUNTS : (state, action) => {
            state.student_verification_update_counts_message = action.payload
        }
    }
})

export default studentSlice.reducer

const { STUDENT_CHECKEMAIL_FULFILLED, STUDENT_VERIFICATION_FULFILLED, STUDENT_VERIFICATION_ENTRY_FULFILLED, STUDENT_VERIFICATION_SEND_EMAIL_FULFILLED, STUDENT_VERIFICATION_UPDATE_COUNTS } = studentSlice.actions

export const STUDENT_CHECKEMAIL_PROCESS = (email) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url : `student-check-email/${email}`,
            method : 'GET',
            onSuccess : STUDENT_CHECKEMAIL_FULFILLED.type
        })
    )
}

export const STUDENT_VERIFICATIONEMAIL_PROCESS = (email) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url : `student-check-verification/${email}`,
            method : 'GET',
            onSuccess : STUDENT_VERIFICATION_FULFILLED.type
        })
    )
}

export const STUDENT_VERIFICATION_ENTRY_PROCESS = (object) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url : 'student-verification-entry',
            method : 'POST',
            data : Process.ST_vc_entry(object),
            onSuccess : STUDENT_VERIFICATION_ENTRY_FULFILLED.type
        })
    )
}

export const STUDENT_VERIFICATION_SEND_EMAIL_PROCESS = (object) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url : `student-verification-send-email/${object.email}/${object.code}/`,
            method : 'POST',
            onSuccess: STUDENT_VERIFICATION_SEND_EMAIL_FULFILLED.type
        })
    )
}

export const STUDENT_VERIFICATION_UPDATE_COUNTS_PROCESS = (object) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url : `student-verification-sent-count-update/${object.email}/${object.code}/`,
            method : 'PUT',
            onSuccess : STUDENT_VERIFICATION_UPDATE_COUNTS.type
        })
    )
}