import React from 'react';
import { View } from 'react-native';

import { Container, ImageBox, TitleBox, Divider } from './styles';

const Box: React.FC = () => {
  return <Container>
    <ImageBox source={{uri: "https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pizza.jpg"}}/>
    <Divider />
    <TitleBox>Padaria Cinco Quintas Pizzas</TitleBox>
  </Container>;
}

export default Box;