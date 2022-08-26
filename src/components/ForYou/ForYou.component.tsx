
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import api from '../../api';
import { BookProps } from './ForYou.types';

import {
  Container,
  Title,
  BookWrapper
} from './ForYou.styled';

function ForYou() {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await api.get('/lists/current/hardcover-fiction.json');
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  return (
    <Container>
      <Title>Para você</Title>

      {!loading  && (
        <FlatList
          data={books}
          keyExtractor={(item) => item.primary_isbn10}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <BookWrapper>
              <Book data={item} />
            </BookWrapper>
          )}
        />
      )}
    </Container>
  )
}

export default ForYou;
