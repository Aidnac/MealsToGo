import React from 'react';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;
const Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.body};
  color: ${props => props.theme.colors.ui.primary};
`;
const Address = styled.Text`
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.caption};
  color: ${props => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  background-color: ${props => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${props => props.theme.colors.bg.primary};
  padding: 20px;
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://media.istockphoto.com/photos/cheeseburger-and-french-fries-picture-id153835617?s=612x612',
    ],
    address = '100 some random strert',
    isOpenNow = true,
    rating = 4,
    isCLosedTemporarily,
  } = restaurant;

  return (
    // <Card elevation={5} style={styles.card}>
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
