import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import configureStore from '../../../core/redux/reducers/store'
const store = configureStore()

import { Global } from '../../../core/context/GlobalContext'
import { ProjectDetailsContext } from '../../../core/context/ProjectDetailsContext'
import HomeFieldDDashboard from '../../Administrator/Dashboard/Home/home_fields'
const setup = () => {
    const AdministratorDashboard = render(
        <BrowserRouter>
            <Provider store={store}>
                <Global>
                    <ProjectDetailsContext>
                        <HomeFieldDDashboard />
                    </ProjectDetailsContext>
                </Global>
            </Provider>
        </BrowserRouter>
    )
    return {
        ...AdministratorDashboard
    }
}


describe('Admin dashboard', () => {
    it('Should render the admin dashboard page without crashing', () => {
        const { AdministratorDashboard } = setup()
        render(AdministratorDashboard)
    })
})