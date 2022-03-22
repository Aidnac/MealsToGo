import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastruture/theme';
import {RestaurantScreen} from './src/features/restaurant/screens/restaurants.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Maps = () => <Text>Maps</Text>;
const Settings = () => <Text>Settings</Text>;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurant" component={RestaurantScreen} />
            <Tab.Screen name="Maps" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
