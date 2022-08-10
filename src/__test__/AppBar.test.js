import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ApplicationBar from '../components/Appbar/Appbar'
import { HashRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

const setup = () => {
    const SystemNavigationBar = render(
        <HashRouter>
            <ApplicationBar />
        </HashRouter>
    )

    return {
        ...SystemNavigationBar
    }
}

describe('navigate to signup', () => {
    it('should navigate to signup', () => {
        const { queryByTestId } = setup()

        const navigate = queryByTestId('onNavigateSignup')
        fireEvent.click(navigate)
    })
})