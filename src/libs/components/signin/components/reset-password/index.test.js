import React from 'react'
import { render, screen, fireEvent, wait } from '@testing-library/react'
import Component from '.'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'
import mocks from '../../mocks/MockGqlQueries'
import { MemoryRouter } from 'react-router-dom'

const renderComponent = async (token = '1') => {
    await render(
        <MemoryRouter initialEntries={[`/reset/${token}`]}>
            <MockedProvider mocks={mocks} addTypename={false}>
                <Component />
            </MockedProvider>
        </MemoryRouter>
    )
}

const password = 'password' 
const submit = 'submit'

describe('reset password',()=>{
    it('should show loading when checking if token is valid', async () => {
        renderComponent()

        expect(screen.getByTestId('screen-loading')).toBeInTheDocument()
        expect(screen.queryByTestId('content')).toBeFalsy()
        await wait()
        expect(screen.queryByTestId('screen-loading')).toBeFalsy()
        expect(screen.getByTestId('content')).toBeInTheDocument()
    });

   it('should show invalid access token', async () => {
        renderComponent('invalid')
        await wait()
        expect(screen.getByTestId('invalid')).toBeInTheDocument()
        expect(screen.queryByTestId('content')).toBeFalsy()
    }); 

    it('should handle a server error', async () => {
        renderComponent('error')
        await wait()
        expect(screen.getByTestId('error')).toBeInTheDocument()
        expect(screen.queryByTestId('content')).toBeFalsy()

    });

    it('should show loading when sending password change', async () => {
        renderComponent()
        await wait()
        expect(screen.queryByTestId('button-loading')).toBeFalsy()

        fireEvent.change(screen.getByTestId(password),{target:{value: '123456'}})
        fireEvent.click(screen.getByTestId(submit))
        expect(screen.getByTestId('button-loading')).toBeInTheDocument()

        await wait()
    });

    it('minimum 6 character on password', async () => {
        renderComponent()
        await wait()
        fireEvent.change(screen.getByTestId(password), { target: { value: '12345' } })
        fireEvent.click(screen.getByTestId(submit))

        expect(screen.queryByTestId('button-loading')).toBeFalsy()
        expect(screen.getByText(/minimum 6 characters/)).toBeInTheDocument()

        fireEvent.change(screen.getByTestId(password), { target: { value: '123456' } })
        fireEvent.click(screen.getByTestId(submit))
        expect(screen.queryByText(/minimum 6 characters/)).toBeFalsy()

        await wait()

    });

    it('should not crash when submitting with empty field', async () => {
        renderComponent()
        await wait()
        fireEvent.click(screen.getByTestId(submit))

        expect(screen.getByText(/minimum 6 characters/)).toBeInTheDocument()

    });

    it('submitting new password server error', async () => {
        let changePasswordError = 'change-password-error'

        renderComponent()
        await wait()
        expect(screen.queryByTestId(changePasswordError)).toBeFalsy()
        fireEvent.change(screen.getByTestId(password),{target:{value: '1234567'}})
        fireEvent.click(screen.getByTestId(submit))
        await wait()
        expect(screen.getByTestId(changePasswordError)).toBeInTheDocument()
        
    });

    it('password successfully changed', async () => {
        let success = 'success'

        renderComponent()
        await wait()
        expect(screen.queryByTestId(success)).toBeFalsy()
        fireEvent.change(screen.getByTestId(password),{target:{value: '123456'}})
        fireEvent.click(screen.getByTestId(submit))
        await wait()
        expect(screen.getByTestId(success)).toBeInTheDocument()
        expect(screen.queryByTestId('content')).toBeFalsy()

        
    });

})