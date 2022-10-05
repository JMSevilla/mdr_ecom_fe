import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Global } from '../../../core/context/GlobalContext'
import ContactUs from '../../FrontPage/contactus/ContactUs'
import { Provider } from 'react-redux'
import configureStore from '../../../core/redux/reducers/store'
const store = configureStore()
import { AppTextField, AppButton } from '../../../components'
jest.mock('../../../core/service/apiservice')

const setup = () => {
    const ContactUsPage = render(
        <BrowserRouter>
            <Provider store={store}>
                <Global>
                    <ContactUs />
                </Global>
            </Provider>
        </BrowserRouter>
    )
    return {
        ...ContactUsPage
    }
}

describe('Contact us Page', () => {
    it('Should render the contact us page without crashing', () => {
        const { ContactUsPage } = setup()
        render(ContactUsPage)
    })
})

describe('Contact Us Inputs', () => {
    it('Should render the contact us page inputs without crashing', () => {
        const { queryByTestId } = setup()
        render(
            <AppTextField />
        )

        const contactus_fullname = queryByTestId('handleChangeFullNameContactUs')
        const contactus_email = queryByTestId('handleChangeEmailContactUs')
        const contactus_subject = queryByTestId('handleChangeSubjectContactUs')
        const contactus_message = queryByTestId('handleChangeMessageContactUs')

        fireEvent.change(contactus_fullname, { target: { value: 'Sample'}})
        fireEvent.change(contactus_email, { target: { value: 'miggysvll@gmail.com'}})
        fireEvent.change(contactus_subject, { target: { value: 'Sample Subject'}})
        fireEvent.change(contactus_message, { target: { value: 'Sample Message'}})

        expect(contactus_fullname).toHaveValue('Sample')
        expect(contactus_email).toHaveValue('miggysvll@gmail.com')
        expect(contactus_subject).toHaveValue('Sample Subject')
        expect(contactus_message).toHaveValue('Sample Message')
    })
})

describe('Contact Us Submit' , () => {
    it('Should submit the form contact us without crashing', () => {
        const { queryByTestId } = setup()
        render(
            <AppButton />
        )
        const btnOnSubmitContactUs = queryByTestId('btnsubmitcontactus')
        fireEvent.click(btnOnSubmitContactUs)
    })
})