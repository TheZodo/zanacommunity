import React from 'react'
import { render, screen, fireEvent, wait } from '@testing-library/react'
import Home from '.'
import '@testing-library/jest-dom/extend-expect'
import { MockedProvider } from '@apollo/react-testing'
import mocks,{loggedInMocks,notLoggedInMocks} from '../mocks/MockGqlQueries'
import { MemoryRouter, Link } from 'react-router-dom'

const emailInput = 'email-input'
const passwordInput = 'password-input'
const login = 'login'
const dashboard = 'dashboard'
const landing = 'landing'
const signup = 'signup'
const forgotPassword = 'forgot-password'


const renderComponent = async (isLoggedIn = false) => {
    
    const logMocks = isLoggedIn ? loggedInMocks : notLoggedInMocks

    await render(
        <MemoryRouter>
            <MockedProvider mocks={[...mocks,logMocks]} addTypename={false}>
                <Home
                    dashboardComponent={
                        <div data-testid={dashboard} />
                    }
                    landingComponent={
                        <div data-testid={landing}>
                            <Link to='/login'><button data-testid='login' /></Link>
                        </div>
                    } />
            </MockedProvider>
        </MemoryRouter>
    )
}

describe('home', () => {
    it('should navigate to dashboard when logged in', async () => {
        renderComponent(true)
        await wait()
        fireEvent.click(screen.getByTestId(login))
        await wait()
        fireEvent.change(screen.getAllByTestId(emailInput)[0], { target: { value: 'test@gmail.com' } })
        fireEvent.change(screen.getAllByTestId(passwordInput)[0], { target: { value: '123456' } })
        fireEvent.click(screen.getAllByTestId(login)[0])

        await wait()
        expect(screen.getByTestId(dashboard)).toBeInTheDocument()

    });

    

    it('should show landing if not logged in', async () => {
        renderComponent()
        await wait()
        expect(screen.getByTestId(landing)).toBeInTheDocument()
    });

    it('should navigate to register screen', async () => {
        renderComponent()
        await wait()
        fireEvent.click(screen.getByTestId(login))
        fireEvent.click(screen.getAllByTestId(signup)[1])

        expect(screen.getByTestId('wrapper-register')).toBeInTheDocument()
    });

    it('navigate to forgot pasword', async () => {
        renderComponent()
        await wait()

        fireEvent.click(screen.getByTestId(login))
        
        fireEvent.click(screen.getAllByTestId(forgotPassword)[0])

        expect(screen.getByTestId('wrapper-forgot-password')).toBeInTheDocument()
    });

    it('should navigate to dashboard on successful creation of account', async () => {
        renderComponent()
        await wait()

        fireEvent.click(screen.getByTestId(login))
       
        fireEvent.click(screen.getAllByTestId('signup')[0])
        fireEvent.change(screen.getAllByTestId(emailInput)[0], { target: { value: 'test@gmail.com' } })
        fireEvent.change(screen.getAllByTestId(passwordInput)[0], { target: { value: '123456' } })
        fireEvent.click(screen.getAllByTestId(login)[0])

        await wait()
        expect(screen.getByTestId(dashboard)).toBeInTheDocument()

    });



})