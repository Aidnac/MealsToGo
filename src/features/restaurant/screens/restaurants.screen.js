import React, {useContext} from 'react';
import {View} from 'react-native';
import {Colors, Searchbar} from 'react-native-paper';
import {FlatList} from 'react-native';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import styled from 'styled-components/native';
import {Spacer} from '../components/spacer.component';
import {SafeArea} from '../../../utils/safe-area.component';
import {RestaurantsContext} from '../../../services/restaurants/resturants.context';
import {ActivityIndicator, Color} from 'react-native-paper';

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {padding: 16},
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25;
`;

const LoadingContainer = styled.View`
  position: absolute
  top: 50%
  left: 50%`;

export const RestaurantScreen = () => {
  const {isLoading, error, restaurants} = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
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
