import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StatusBar, SafeAreaView} from 'react-native';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && 'margintop:{StatusBar.currentHeight}px'}
`;
const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
