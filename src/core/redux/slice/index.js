import { ScannedToken } from './Token/tokenSlice'
import { loginProcess } from './Login/loginSlice'
import { scanProcess } from './Admin/AdministratorSlice'
export { default as tokenReducer } from './Token/tokenSlice'
export { default as loginReducer } from './Login/loginSlice'
export { default as administratorReducer } from './Admin/AdministratorSlice'


export {
    ScannedToken, loginProcess, scanProcess
}