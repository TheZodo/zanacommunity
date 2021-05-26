
import React from 'react'
import { render, screen, fireEvent, wait, within } from '@testing-library/react'
import Component from '.'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'
import { MemoryRouter, Route } from 'react-router-dom'
import {mocks} from '../../constants/MockGqlQueries'

const renderComponent = () => {
   
    render(
        <MemoryRouter initialEntries={[`/support`]} >
            <MockedProvider mocks={mocks} addTypename={false}>
                <Route path={`/support`}> <Component /> </Route>
            </MockedProvider>
        </MemoryRouter>
    )
}

describe('support', () => {
    it('should prerender a provided email', async () => {
        render(
            <MockedProvider>
        <Component email='test@gmail.com'/>
        </MockedProvider> )
        expect(screen.getByTestId('email-input').value).toBe('test@gmail.com')
    });
    
    it('should not send when text input or email is empty', async () => {
        renderComponent()
        expect(screen.queryByText(/email cannot be empty/)).toBeFalsy()
        expect(screen.queryByText(/message cannot be empty/)).toBeFalsy()

        fireEvent.click(screen.getByTestId('submit'))
        expect(screen.getByText(/message cannot be empty/)).toBeInTheDocument()
        expect(screen.getByText(/email cannot be empty/)).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'test' } })
        fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@gmail.com' } })

        expect(screen.queryByText(/email cannot be empty/)).toBeFalsy()
        expect(screen.queryByText(/message cannot be empty/)).toBeFalsy()
    });

    it(' error sending message ', async () => {
        renderComponent()
        fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'test' } })
        fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'error@gmail.com' } })

        fireEvent.click(screen.getByTestId('submit'))
await wait()
        expect(screen.getByTestId('error')).toBeInTheDocument()

    });

    it('success sending message ', async () => {
        renderComponent()
        fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'test' } })
        fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'test@gmail.com' } })

        fireEvent.click(screen.getByTestId('submit'))
        expect(screen.getByTestId('button-loading')).toBeInTheDocument()

        await wait()
        expect(screen.queryByTestId('button-loading')).toBeFalsy()

        expect(screen.getByTestId('success')).toBeInTheDocument()

    });
})
