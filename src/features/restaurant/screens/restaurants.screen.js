import React, {useContext, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ActivityIndicator, Colors} from 'react-native-paper';

import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';
// import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {Search} from '../components/search.component';
import {RestaurantInfoCard} from '../components/restaurant-info-card.component';
import {SafeArea} from '../../../utils/safe-area.component';
import {Spacer} from '../components/spacer.component';
import {FavouritesBar} from '../../../components/favourites/favourites-bar.component';
import {FavouritesContext} from '../../../services/favourites/favourites.context';
import {RestaurantList} from '../components/restaurant-list.styles';

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

//all components in the stack get the prop navigation
export const RestaurantsScreen = ({navigation}) => {
  const {isLoading, restaurants} = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouratesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {restaurant: item})
              }>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
