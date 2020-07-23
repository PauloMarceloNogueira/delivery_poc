import React from 'react';
import { View } from 'react-native';

import { Container, Title, ViewMore, ViewMoreTitle, Header } from './styles';
import Box from '../Box';

const LastOrders: React.FC = () => {
  return <Container>
    <Header>
      <Title>Últimos restaurantes</Title>
      <ViewMore>
        <ViewMoreTitle>Ver mais</ViewMoreTitle>
      </ViewMore>
    </Header>
    <Box />
  </Container>;
}

export default LastOrders;