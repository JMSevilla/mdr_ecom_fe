import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Global } from '@emotion/react'

const setup = () => {
    const GlobalContextAPI = render(
        <Global />
    )

    return {
        ...GlobalContextAPI
    }
}

describe('Global Context Calling', () => {
    it('Should render global context' , () => {
        const { GlobalContextAPI } = setup()
        render(GlobalContextAPI)
    })
})