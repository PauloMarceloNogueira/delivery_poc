import React, { useContext, useEffect } from 'react';
import { View, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { AuthContext, AuthTypes } from '../../Contexts/AuthContext';

// import { Container } from './styles';

const Auth: React.FC = () => {
  const {state, dispatch} = useContext(AuthContext)
  
  useEffect(() => {
    console.log('Entrou no Auth')
  }, [state])

  const handleLogin = () => {
    dispatch({
      type: AuthTypes.Login,
      payload: {
        name: 'PM'
      }
    })
  }

  const handleLogout = () => {
    dispatch({
      type: AuthTypes.Logout
    })
  }
  return <View>
    {state.user.name ? 
      <View>
        <Text>Olá {state.user.name}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    :
      <View>
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    }
  </View>;
}

export default Auth;