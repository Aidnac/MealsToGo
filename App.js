import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastruture/theme';
import {RestaurantScreen} from './src/features/restaurant/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
    </>
  );
}
