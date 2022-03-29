import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FavouritesContext} from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
    position:absolute
    top:25px
    right:25px
    z-index:9
`;

// const myIcon = <Icon name="rocket" size={30} color="#900" />;

export const Favourite = ({restaurant}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContext);

  const isFavourites = favourites.find(r => r.placeId === restaurant.placeId);
  console.log(isFavourites);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourites
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }>
      <Icon
        name={isFavourites ? 'heart' : 'heart-o'}
        size={24}
        color={isFavourites ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
