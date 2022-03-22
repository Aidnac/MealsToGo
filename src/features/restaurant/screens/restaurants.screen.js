import React, {useContext} from 'react';
import {Searchbar} from 'react-native-paper';
import {FlatList} from 'react-native';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import {Spacer} from '../components/spacer.component';
import {SafeArea} from '../../../utils/safe-area.component';
import {RestaurantsContext} from '../../../services/restaurants/resturants.context';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {padding: 16},
})``;

export const RestaurantScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
