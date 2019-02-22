import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import BottomNav from './src/components/bottomNav';

export default function App() {
  return (
    <View style={styles.flex}>
      <StackNav />
    </View>
  );
}

const StackNav = createStackNavigator({
  BottomNav: {
    screen: BottomNav,
    navigationOptions: {
      headerTintColor: '#000',
      header: null,
    },
  },
});

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
