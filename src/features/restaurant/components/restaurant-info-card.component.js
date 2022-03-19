/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

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
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
  },
  cover: {
    padding: 20,
    backgroundColor: 'white',
  },
  title: {padding: 16, color: 'black'},
});
