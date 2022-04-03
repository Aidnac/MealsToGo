import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastruture/theme';
import {initializeApp} from 'firebase/app';
import {RestaurantsContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';

import {Navigation} from './src/infrastruture/navigation';
import {AuthenticationContextProvider} from './src/services/authentication/authentication.context';

const firebaseConfig = {
  apiKey: 'AIzaSyAEK-y1kZw-plGz7jOaYvHTM-_vz0zykK4',
  authDomain: 'mealstogo-57f18.firebaseapp.com',
  projectId: 'mealstogo-57f18',
  storageBucket: 'mealstogo-57f18.appspot.com',
  messagingSenderId: '348763080980',
  appId: '1:348763080980:web:8a383d8dbe59f7cd491a01',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (!app.length) {
  initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
