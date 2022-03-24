import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {RestaurantsScreen} from '../../features/restaurant/screens/restaurants.screen';
import {RestaurantDetailScreen} from '../../features/restaurant/screens/restaurant-detail.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
