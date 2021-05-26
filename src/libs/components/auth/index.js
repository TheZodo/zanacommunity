import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Login from './login'
import Register from './register'
import ForgotPassword from './forgot-password'
import ChangePassword from './change-password'
import Loading from '../loading'

function Auth({ logo, landingComponent, dashboardComponent }) {

    const { isAuthenticated, isLoading } = useAuth()

    console.log({isAuthenticated})
    return (
        <Switch>
            <Route path='/login'><Login logo={logo} /></Route>
            <Route path='/register'><Register logo={logo} /></Route>
            <Route path='/forgot-password'><ForgotPassword logo={logo} /></Route>
            <Route path='/reset'><ChangePassword logo={logo} /></Route>

            < Route path='/'>
                {isLoading ?

                    <div className='w-full h-screen'>
                        <Loading />
                    </div>
                    :


                    (isAuthenticated ?
                        dashboardComponent 
                        :
                        landingComponent 
                    )
                }
            </Route>

        </Switch>
    )
}

Auth.propTypes = {

}

export default Auth

