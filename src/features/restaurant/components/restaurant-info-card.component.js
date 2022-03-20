import React from 'react';
import {Text, Image} from 'react-native';
import {Card} from 'react-native-paper';
import styled from 'styled-components/native';
import {SvgXml} from 'react-native-svg';
import star from '../../../assets/stars';
import open from '../../../assets/open';

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row
  align-items: center
`;

const SectionEnd = styled.View`
  flex: 1
  flex-direction: row
  justify-content: flex-end
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
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://media.istockphoto.com/photos/cheeseburger-and-french-fries-picture-id153835617?s=612x612',
    ],
    address = '100 some random strert',
    isOpenNow = true,
    rating = 4,
    isCLosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    // <Card elevation={5} style={styles.card}>
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCLosedTemporarily && (
              <Text variant="label" style={{color: 'red'}}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Image
              style={{width: 15, height: 15, marginLeft: 16}}
              source={{uri: icon}}
            />
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
