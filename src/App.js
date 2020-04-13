import React, { lazy, Suspense, useContext, useState, useEffect } from 'react'
import { LinearProgress } from '@material-ui/core'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthContext } from 'contexts/auth'
import firebase from 'services/firebase'
import t from 'prop-types'
const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))
function App ({ location }) {
  const { userInfor, setUserInfor, logout } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)
  const { isUserLoggedIn } = userInfor

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuario: ', user)
      setUserInfor({ isUserLoggedIn: !!user, user })
      setDidCheckUserIn(true)
    })
  }, [])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
  }

  window.logout = logout

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>

  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
