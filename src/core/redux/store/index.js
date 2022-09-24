import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { tokenReducer, loginReducer, administratorReducer } from '../slice'
import serverMiddleware from '../middleware/serverMiddleware'

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

  export default function store() {
    return configureStore({
        reducer : {
            token : tokenReducer,
            login : loginReducer,
            admin : administratorReducer
        },
        middleware: [...customizedMiddleware, serverMiddleware]
    })
  }