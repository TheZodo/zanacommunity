import React from 'react'
import { render, screen, fireEvent, wait } from '@testing-library/react'
import Signin from '.'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'
import mocks from '../mocks/MockGqlQueries'
import { MemoryRouter } from 'react-router-dom'

const emailInput = 'email-input'
const passwordInput = 'password-input'
const login = 'login'
const buttonLoading = 'button-loading'


const renderComponent = async () => {

    await render(
        <MemoryRouter initialEntries={['/login']}>
            <MockedProvider mocks={mocks} addTypename={false}>
                <Signin />
            </MockedProvider>
        </MemoryRouter>
    )
}


//successful login should navigate back to '/' but recognise the login token hence
//automatically redirect to logged in dashboard //TODO HAS THIS ALREADY BEEN DONE
describe('signin simple', () => {
    it('should show wrong password', async () => {
        const wrongPassword = 'wrong-password'

        renderComponent()
        expect(screen.queryByTestId(wrongPassword)).toBeFalsy()
        fireEvent.change(screen.getByTestId(emailInput), { target: { value: 'failed@gmail.com' } })
        fireEvent.change(screen.getByTestId(passwordInput), { target: { value: '123456' } })
        fireEvent.click(screen.getByTestId(login))

        await wait()
        expect(screen.getByTestId(wrongPassword)).toBeInTheDocument()

    });

    it('should show error', async () => {
        renderComponent()
        expect(screen.queryByTestId('error')).toBeFalsy()
        fireEvent.change(screen.getByTestId(emailInput), { target: { value: 'error@gmail.com' } })
        fireEvent.change(screen.getByTestId(passwordInput), { target: { value: '123456' } })
        fireEvent.click(screen.getByTestId(login))

        await wait()
        expect(screen.getByTestId('error')).toBeInTheDocument()
    });

    it('button should be loading onSubmit', async () => {
        renderComponent()
        fireEvent.change(screen.getByTestId(emailInput), { target: { value: 'test@gmail.com' } })
        fireEvent.change(screen.getByTestId(passwordInput), { target: { value: '123456' } })
        fireEvent.click(screen.getByTestId(login))

        expect(screen.getByTestId(buttonLoading)).toBeInTheDocument()
        await wait()
    })

    it('minimum 6 character on password', async () => {
        renderComponent()
        fireEvent.change(screen.getByTestId(emailInput), { target: { value: 'test@gmail.com' } })
        fireEvent.change(screen.getByTestId(passwordInput), { target: { value: '12345' } })
        fireEvent.click(screen.getByTestId(login))

        expect(screen.queryByTestId(buttonLoading)).toBeFalsy()
        expect(screen.getByText(/minimum 6 characters/)).toBeInTheDocument()

        fireEvent.change(screen.getByTestId(passwordInput), { target: { value: '123456' } })
        fireEvent.click(screen.getByTestId(login))
        expect(screen.queryByText(/minimum 6 characters/)).toBeFalsy()
        await wait()
    });

    it('should not crash when submitting with empty fields', async () => {
        renderComponent()
       fireEvent.click(screen.getByTestId(login))
        expect(screen.getByText(/minimum 6 characters/)).toBeInTheDocument()
        expect(screen.getByText(/invalid email address/)).toBeInTheDocument()
    });

    it('invalid email address', async () => {
        renderComponent()
        fireEvent.change(screen.getByTestId(emailInput), { target: { value: 'testgmail.com' } })
        fireEvent.change(screen.getByTestId(passwordInput), { target: { value: '123456' } })
        fireEvent.click(screen.getByTestId(login))

        expect(screen.queryByTestId(buttonLoading)).toBeFalsy()
        expect(screen.getByText(/invalid email address/)).toBeInTheDocument()

        fireEvent.change(screen.getByTestId(emailInput), { target: { value: 'test@gmail.com' } })
        fireEvent.click(screen.getByTestId(login))

        expect(screen.queryByText(/invalid email address/)).toBeFalsy()
        await wait()

    });

    it('empty email address', async () => {
        renderComponent()
        fireEvent.change(screen.getByTestId(passwordInput), { target: { value: '12356' } })
        fireEvent.click(screen.getByTestId(login))

        expect(screen.queryByTestId(buttonLoading)).toBeFalsy()
        expect(screen.getByText(/invalid email address/)).toBeInTheDocument()
    });



})