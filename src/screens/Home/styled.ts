import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: '#E5E5E5';
`;

export const Header = styled.View`
  width: 100%;
  height: 56px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.primary_900};
  color: ${({ theme }) => theme.colors.grayDarker};
`;

export const ProfileImage = styled.ImageBackground`
  width: 32px;
  height: 32px;
  align-self: center;
`;
