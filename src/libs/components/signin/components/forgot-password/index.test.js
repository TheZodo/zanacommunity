import React from 'react'
import { render, fireEvent, screen, wait } from '@testing-library/react'
import Component from '.'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'
import mocks from '../../mocks/MockGqlQueries'

const email = 'email'
const submit = 'submit'
const loading = 'button-loading'
const error = 'error'
const form = 'form'
const success = 'success'

const renderComponent = () => {
    render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <Component />
        </MockedProvider>
    )

}

describe('forgot password', () => {
    it('should validate email', () => {
        renderComponent()

        fireEvent.change(screen.getByTestId(email), { target: { value: 'gmail.com' } })
        fireEvent.click(screen.getByTestId(submit))

        expect(screen.getByText(/invalid email address/)).toBeInTheDocument();
        expect(screen.queryByTestId(loading)).toBeFalsy()
    });

    it('should not crash when submitting with empty fields', () => {
        renderComponent()
        fireEvent.click(screen.getByTestId(submit))

        expect(screen.getByText(/invalid email address/)).toBeInTheDocument();
    });

    it('should show loading', async () => {

        renderComponent()
        fireEvent.change(screen.getByTestId(email), { target: { value: 'test@gmail.com' } })
        fireEvent.click(screen.getByTestId(submit))
        expect(screen.getByTestId(loading)).toBeInTheDocument()
        await wait()
    });

    it('error returned from server', async () => {

        expect(screen.queryByTestId(error)).toBeFalsy()
        renderComponent()
        fireEvent.change(screen.getByTestId(email), { target: { value: 'error@gmail.com' } })
        fireEvent.click(screen.getByTestId(submit))
        await wait()
        expect(screen.getByTestId(error)).toBeInTheDocument()
    });


    it('email does not exist', async () => {

        expect(screen.queryByTestId(error)).toBeFalsy()
        renderComponent()
        fireEvent.change(screen.getByTestId(email), { target: { value: 'failed@gmail.com' } })
        fireEvent.click(screen.getByTestId(submit))
        await wait()
        expect(screen.getByTestId('non-exist')).toBeInTheDocument()

    });


    it('password reset email successfully sent', async () => {
        renderComponent()
        fireEvent.change(screen.getByTestId(email), { target: { value: 'test@gmail.com' } })
        fireEvent.click(screen.getByTestId(submit))
        await wait()
        expect(screen.getByTestId(success)).toBeInTheDocument()
        expect(screen.queryByTestId(form)).toBeFalsy()

    });

})