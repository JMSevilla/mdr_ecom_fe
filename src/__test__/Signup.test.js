import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Signup from '../views/signup/Signup'
import { Global } from '../core/context/GlobalContext'
import AppTextField from '../components/TextField/TextField'

const setup = () => {
    const SignupPage = render(
        <HashRouter>
             <Global>
                <Signup />
             </Global>
        </HashRouter>
    )

    return { 
        ...SignupPage
    }
}

describe('Business Personal Information Firstname', () => {

    it('Should be accept user input for firstname', () => {
        const { queryByTestId } = setup()
        const BusinessFirstnameInput = queryByTestId('input-business-firstname')
        fireEvent.change(BusinessFirstnameInput, {target : {value : 'Sample'}})

        expect(BusinessFirstnameInput).toHaveValue('Sample')
    })
})
