import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import configureStore from '../../../core/redux/reducers/store'
const store = configureStore()

import { Global } from '../../../core/context/GlobalContext'
import { ProjectDetailsContext } from '../../../core/context/ProjectDetailsContext'
import Signup from '../../signup/Signup'
import { AppButton, AppTextField } from '../../../components'

const setup = () => {
    const SignupPage = render(
        <BrowserRouter>
            <Provider store={store}>
                <Global>
                    <ProjectDetailsContext>
                        <Signup />
                    </ProjectDetailsContext>
                </Global>
            </Provider>
        </BrowserRouter>
    )
    return {
        ...SignupPage
    }
}


describe('Signup Page', () => {
    it('Should render the signup page without crashing', () => {
        const { SignupPage } = setup()
        render(SignupPage)
    })

    it('Should remove features', () => {
        render(
            <AppButton />
        )
        const removeButton = screen.queryByText('REMOVE')
        expect(removeButton).not.toBeInTheDocument()
    })

    it('Should select client from sign up category', () => {
        const { queryByTestId } = setup()
        render(
            <AppButton />
        )
        const btnSelectClientCategorySignup = queryByTestId('btnSelectClientCategorySignup')
        fireEvent.click(btnSelectClientCategorySignup)
    })

    it('Should select developers from sign up category', () => {
        const { queryByTestId } = setup()
        render(
            <AppButton />
        )
        const btnSelectDevelopersCategorySignup = queryByTestId('btnSelectDevelopersCategorySignup')
        fireEvent.click(btnSelectDevelopersCategorySignup)
    })

    it('Should navigate to business owner from sign up category', () => {
        render(
            <AppButton />
        )
        const navigateBusinessOwnerButton = screen.queryByText('I am a business owner')
        expect(navigateBusinessOwnerButton).not.toBeInTheDocument()
    })

    it('Should navigate to student from sign up category', () => {
        render(
            <AppButton />
        )
       const navigateStudentButton = screen.queryByText('I am a student')
        expect(navigateStudentButton).not.toBeInTheDocument()
    })

    describe('Sign up inputs', () => {
        it('Should Display Sign up inputs for primary information unrendered must be null', () => {
            const rendered = render (
                <AppTextField />
            )
            expect(rendered.queryByTestId('signupFirstname')).toBeNull()
            expect(rendered.queryByTestId('signupLastname')).toBeNull()
            expect(rendered.queryByTestId('signupContactNumber')).toBeNull()
            expect(rendered.queryByTestId('signupAddress')).toBeNull()
        })
        it('Should Display Sign up inputs for Project Details unrendered must be null', () => {
            const { queryByTestId } = setup()
            const rendered = render (
                <AppTextField />
            )
            expect(rendered.queryByTestId('signupProjectName')).toBeNull()
            expect(rendered.queryByTestId('signupProjectCategory')).toBeNull()
            expect(rendered.queryByTestId('signupProjectType')).toBeNull()
            expect(rendered.queryByTestId('signupProjectSlider')).toBeNull()
        })
        it('Should Display Sign up inputs for Credentials unrendered must be null', () => {
            const { queryByTestId } = setup()
            const rendered = render (
                <AppTextField />
            )
            expect(rendered.queryByTestId('signupBoEmail')).toBeNull()
            expect(rendered.queryByTestId('signupBoPassword')).toBeNull()
            expect(rendered.queryByTestId('signupBoConPassword')).toBeNull()
        })
    })
})
