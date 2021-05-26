import Dashboard from 'app/dashboard'
import Landing from 'app/landing'
import Logo from 'app/logo'
import useAuth from 'libs/auth-react/hooks/useAuth'
import Auth from 'libs/components/auth'
import Card from 'libs/components/card'
import Text from 'libs/components/text'
import React from 'react'
import { Route, Switch } from 'react-router'

export default function App() {
  
  const {isAuthenticated} = useAuth()

  console.log({isAuthenticated})
  return (
    <Switch>
      <Route path='/'>
        <Auth
          landingComponent={<Landing />}
          dashboardComponent={<Dashboard />}
          logo={<Logo
            showText={false}
          />}
        />
      </Route>
    </Switch>
  )
}
