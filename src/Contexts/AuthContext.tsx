// import {createContext, useState} from 'react'

// interface Auth {
//   isLogged: Boolean
//   toggle: Function
// }

// const handleToogle = () => {
  
// }

// const AuthContext = createContext<Auth>({
//   isLogged: false,
//   toggle: handleToogle
// })

// export default AuthContext

import React, { useReducer, createContext } from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
type AuthType = {
  user: User
}

type User = {
  name?: string
}

type AuthPayload = {
  [AuthTypes.Login]: {
    name: string
  }
  [AuthTypes.Logout]: undefined
}


type AuthAction = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>]

enum AuthTypes {
  Login = 'Login',
  Logout = 'Logout'
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

const authReducer = (state: AuthType, action: AuthAction) => {
  switch(action.type) {
    case AuthTypes.Login: 
      return {
        ...state,
        user: {
          name: action.payload.name
        }
      }
    case AuthTypes.Logout: 
      return {
        user: {}
      }
    default: 
      return state
  }
}
const AuthInitialState = {
  user: {}
}

type AuthInitialStateType = {
  user: User
}

const AuthContext = createContext<{state: AuthInitialStateType; dispatch: React.Dispatch<any>}>({
  state: AuthInitialState,
  dispatch: () => null
})

const AuthProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, AuthInitialState)
  return <AuthContext.Provider value={{state, dispatch}}>
    {children}
  </AuthContext.Provider>;  
}

export {AuthContext, AuthProvider, AuthTypes}