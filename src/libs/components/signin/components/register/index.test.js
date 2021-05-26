import React from 'react'
import { render, screen, fireEvent, wait } from '@testing-library/react'
import Component from '.'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'
import mocks from '../../mocks/MockGqlQueries'
import { MemoryRouter } from 'react-router-dom'


//if user already exist
//if server error


const emailInput = 'email-input'
const passwordInput = 'password-input'
const login = 'login'

const renderComponent = async () => {
    localStorage.setItem('jwt', null)

    await render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Component />
        </MockedProvider>
    )
}

describe('register', () => {
    it('should notify that user already exists', async () => {
        const exists = 'already-exists'
        renderComponent()

        expect(screen.queryByTestId(exists)).toBeFalsy()
        fireEvent.change(screen.getAllByTestId(emailInput)[0], { target: { value: 'exists@gmail.com' } })
        fireEvent.change(screen.getAllByTestId(passwordInput)[0], { target: { value: '123456' } })
        fireEvent.click(screen.getAllByTestId(login)[0])

        await wait()

        expect(screen.getAllByTestId(exists)[0]).toBeInTheDocument()

        
    });

    it('server error', async () => {
        const error = 'error'
        renderComponent()

        expect(screen.queryByTestId(error)).toBeFalsy()
        fireEvent.change(screen.getAllByTestId(emailInput)[0], { target: { value: 'failed@gmail.com' } })
        fireEvent.change(screen.getAllByTestId(passwordInput)[0], { target: { value: '123456' } })
        fireEvent.click(screen.getAllByTestId(login)[0])

        await wait()

        expect(screen.getAllByTestId(error)[0]).toBeInTheDocument()


    });
})