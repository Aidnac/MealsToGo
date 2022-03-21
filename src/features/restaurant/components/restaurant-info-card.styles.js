import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

export const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

export const Section = styled.View`
flex-direction: row
align-items: center
`;

export const SectionEnd = styled.View`
flex: 1
flex-direction: row
justify-content: flex-end
`;

export const Icon = styled.Image`
width:20px
height:20px
`;

export const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.ui.primary};
`;

export const RestaurantCard = styled(Card)`
  margin-top: ${props => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: 20px;
`;
