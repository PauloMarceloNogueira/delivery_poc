import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';

import { Container, List, Item, Content, Title } from './styles';

interface CarouselProps {
  items: ItemProps[]
}

type ItemProps = {
  name: String,
  picture: String
}

const Carousel: React.FC<CarouselProps> = (items) => {
  return <Container horizontal={true} showsHorizontalScrollIndicator={false}>
    <List>
      {
        items.items.map((item, key) => (
          <Content key={key}>
            <Item imageStyle={{ borderRadius: 40 }} resizeMode="cover" source={{uri:item.picture}} />        
            <Title>{item.name}</Title>
          </Content>
        ))
      }
    </List>
  </Container>
}

export default Carousel;