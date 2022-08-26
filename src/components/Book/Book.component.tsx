import React from 'react';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { BookProps } from './Book.types';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  BookImage
} from './styles';

export function Book({ primary_isbn10, title, author, book_image }: BookProps) {
  
  return (
    <Container>
      <BookImage 
        source={{ uri: `${book_image}` }} 
        resizeMode="contain"
      />
      <Details>
        <Title>{title}</Title>
        <Author>{name}</Author>
      </Details>
    </Container>
  );
}
