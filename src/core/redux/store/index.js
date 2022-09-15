import {configureStore} from '@reduxjs/toolkit'
import tokenReducer from '../slice/tokenSlice'


const store = configureStore({
    reducer : {
        token : tokenReducer
    }
})

export default store