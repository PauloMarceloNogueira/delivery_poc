import React from 'react';
import { Container, Banner } from './styles';
import { TouchableWithoutFeedback } from 'react-native';

interface BannersProps {
  items: BannerType[]
}

type BannerType = {
  title: string
  picture: string
  slug: string
}

const Banners: React.FC<BannersProps> = (items) => {

  const handleNavigation = (item:BannerType) => {
    console.log(`GoTo ${item.slug}`)
  }
  return <Container horizontal={true} showsHorizontalScrollIndicator={false}>
    {items.items.map(item => {
      return <TouchableWithoutFeedback onPress={() => handleNavigation(item)}>
        <Banner source={{uri:item.picture}} resizeMode="center" bgColor="blue" />
      </TouchableWithoutFeedback>
    })}
  </Container>;
}

export default Banners;