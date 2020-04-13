import React, { createContext, useCallback, useState } from 'react'
import types from 'prop-types'
import firebase from 'services/firebase'
export const AuthContext = createContext()

function Auth ({ children }) {
  const [userInfor, setUserInfor] = useState({ isUserLoggedIn: false, user: null })
  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => setUserInfor({ isUserLoggedIn: false, user: null }))
  }, [])

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      userInfor,
      setUserInfor
    }}>
      {children}
    </AuthContext.Provider>

  )
}

Auth.propTypes = {
  children: types.node.isRequired
}

export default Auth
