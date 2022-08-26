import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: '#E5E5E5';
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_900};
  color: ${({ theme }) => theme.colors.grayDarker};
`;

export const BookWrapper = styled.View`
  margin: 16px 0;
`;
