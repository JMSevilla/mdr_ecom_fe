import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import serverMiddleware from './middleware/serverMiddleware'
import { tokenizationReducer } from './slices'
export default function store(){
    return configureStore({
        reducer: {
            token : tokenizationReducer
        },
        middleware: [...getDefaultMiddleware(), serverMiddleware]
    })
}