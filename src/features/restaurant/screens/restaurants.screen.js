import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StatusBar, FlatList, SafeAreaView} from 'react-native';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import {Spacer} from '../components/spacer.component';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
  ${StatusBar.currentHeight && 'margintop:{StatusBar.currentHeight}px'}
`;
const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {padding: 16},
})``;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[
          {name: 1},
          {name: 2},
          {name: 3},
          {name: 4},
          {name: 5},
          {name: 6},
          {name: 7},
          {name: 8},
          {name: 9},
          {name: 10},
        ]}
        renderItem={() => (
          <Spacer>
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
