import React from 'react';

import { Container } from './styles';
import Carousel from '../../Components/Carousel';
import { Text } from 'react-native';
import Banners from '../../Components/Banners';
import LastOrders from '../../Components/LastOrders';

const Home: React.FC = () => {
  const Categories = [
    {
      name: 'Mercado',
      picture: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/mercado_amareclo.png',
    },
    {
      name: 'Promoções',
      picture: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/Promo_cat.png'
    },
    {
      name: 'Lanches',
      picture: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-lanches-v2.jpg'
    },
    {
      name: 'Pizza',
      picture: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-pizza.jpg'
    },
    {
      name: 'Vegetariana',
      picture: 'https://static-images.ifood.com.br/image/upload/t_low/discoveries/19C1-vegetariana.jpg'
    }
  ]

  const BannersList = [
    {
      picture: 'https://static-images.ifood.com.br/image/upload//discoveries/ifood_capas_rest_entrega_gratis_abr_20.png',
      title: '',
      slug: '/entrega-gratis'
    },
    {
      picture: 'https://static-images.ifood.com.br/image/upload//discoveries/20C1_jbb.png',
      title: '',
      slug: '/jantar-10'
    },
    {
      picture: 'https://static-images.ifood.com.br/image/upload//discoveries/20C1_20reais.png',
      title: '',
      slug: '/pratos-20'
    },
    {
      picture: 'https://static-images.ifood.com.br/image/upload//discoveries/GROC_ifood.png',
      title: '',
      slug: '/mercado'
    }    
  ]
  return <Container>
    <Carousel items={Categories}/>
    <Banners items={BannersList}/>
    <LastOrders />
    <Text>AQUI</Text>
  </Container>;
}

export default Home;