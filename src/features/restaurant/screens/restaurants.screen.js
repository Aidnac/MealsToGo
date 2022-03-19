import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {RestaurantInfo} from '../components/restaurant.info.component';

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
