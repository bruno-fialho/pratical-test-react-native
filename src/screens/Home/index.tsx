import React from 'react';

import Image from '../../../assets/perfil.png';

import {
  Container,
  Header,
  Title,
  ProfileImage
} from './styled';

function Home() {
  return (
    <Container>
      <Header>
        <Title>
          Olá, Ana!
        </Title>
        <ProfileImage source={Image} />
      </Header>

      <BestSellers />
    </Container>
  )
}

export default Home;
