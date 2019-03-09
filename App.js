import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import store from './src/redux/store';
import BottomNav from './src/components/bottomNav';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.flex}>
        <StackNav />
      </View>
    </Provider>
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
