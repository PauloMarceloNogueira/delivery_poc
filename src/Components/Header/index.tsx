import React, { useContext, Fragment, useEffect } from 'react';
import { View, Text, TouchableWithoutFeedback, TextStyle } from 'react-native';

import { Container, Title } from './styles';
import { ThemeContext } from '../../Contexts/ThemeContext';
import { AuthContext } from '../../Contexts/AuthContext';


const Header: React.FC = () => {
  const {state, dispatch} = useContext(ThemeContext)
  const {state: stdAuth, dispatch: dispatchAuth} = useContext(AuthContext)
  useEffect(() => {
    console.log('Entrou no Header')
  }, [state])

  useEffect(() => {
    console.log('Rerender Header on change Auth')
  },[stdAuth])
  const handleToogle = () => {
    dispatch({
      type: 'Toogle'
    })
  }
  return <Container isLight={state.isLight}>
      <Text>{state.isLight ? 'LIGHT' : 'DARK'}</Text>
      {stdAuth.user.name && 
        <Title isLight={state.isLight}>Olá {stdAuth.user.name}</Title>
      }
      <TouchableWithoutFeedback onPress={handleToogle}>
        <Title isLight={state.isLight}>Clicar</Title>
      </TouchableWithoutFeedback>
    </Container>
}

export default Header;