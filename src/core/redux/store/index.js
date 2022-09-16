import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { tokenReducer, loginReducer } from '../slice'
import serverMiddleware from '../middleware/serverMiddleware'

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

  export default function store() {
    return configureStore({
        reducer : {
            token : tokenReducer,
            login : loginReducer
        },
        middleware: [...customizedMiddleware, serverMiddleware]
    })
  }