import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastruture/theme';
import {RestaurantScreen} from './src/features/restaurant/screens/restaurants.screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import {SafeArea} from './src/utils/safe-area.component';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Maps = () => (
  <SafeArea>
    <Text>Maps</Text>
  </SafeArea>
);
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  // i think if u add md at the beginning of the icon name it means material design
                  iconName = 'restaurant';
                } else if (route.name === 'Settings') {
                  iconName = 'md-settings';
                } else if (route.name === 'Map') {
                  iconName = 'md-map';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
}
