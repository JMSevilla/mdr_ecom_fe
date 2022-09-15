import {createSlice} from '@reduxjs/toolkit'
import { apiCallBegan } from '../../../actions/actions'

export const initialState = { 
    token_message : ''
}

const tokenizationSlice = createSlice({
    name : 'tokenization',
    initialState,
    reducers : {
        process_tokenization: (state, action) => {
            state.token_message = action.payload
        }
    }
})

export default tokenizationSlice.reducer
const { process_tokenization } = tokenizationSlice.actions

export const USER_checktoken = (id) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url : `get-token?userid=${id}`,
            method : 'GET',
            onSuccess : process_tokenization.type
        })
    )
}