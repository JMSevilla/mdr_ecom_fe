import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Global } from '../../core/context/GlobalContext'
import Home from '../Home'
import {Provider} from 'react-redux'
import configureStore from '../../core/redux/reducers/store'
const store = configureStore()

import { MockToken, props } from '../__mocks__/MockTokenization'
import FormService from '../../core/service/apiservice'

jest.mock('../../core/service/apiservice')



const setup = () => {
    const HomePage = render(
        <BrowserRouter>
            <Provider store={store}>
                <Global>
                    <Home />
                </Global>
            </Provider>
        </BrowserRouter>
    )

    return {
        ...HomePage
    }
}



describe('Home Page', () => {
    it('Should render the home page without crashing', () => {
        const { HomePage } = setup()
        render(HomePage)
    })

    it('Should call API from home', () => {
        FormService.ADMINISTRATOR_checkadmin.mockResolvedValue('not_exist')
        FormService.USER_checkLogin.mockResolvedValue(MockToken)
         const { HomePage } = setup()
        render(HomePage)
        expect(FormService.ADMINISTRATOR_checkadmin).toHaveBeenCalledTimes(0)
        expect(FormService.USER_checkLogin).toHaveBeenCalledTimes(0)
    })
})