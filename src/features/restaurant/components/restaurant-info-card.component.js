import React from 'react';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';

const Title = styled.Text`
  padding: 16px
  color:black
`;

const RestaurantCard = styled(Card)`
  // you can use this if using css
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
    // Or you can use this using react native
    backgroundColor: 'white'
    padding: 20px
    
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
      <Title>{name}</Title>
      {/* <Text style={styles.title}>{name}</Text> */}
    </RestaurantCard>
  );
};
