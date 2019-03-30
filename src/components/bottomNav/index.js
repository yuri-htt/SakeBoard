import React from 'react';
import {
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import HomeScreen from '../../screen/home';
import SearchScreen from '../../screen/search';
import AddScreen from '../../screen/add';
import ListScreen from '../../screen/list';
import DetailScreen from '../../screen/detail';
import EditScreen from '../../screen/edit';

function BottomNav() {
  return (
    <View style={{ flex: 1 }}>
      <Nav />
    </View>
  );
}

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  List: {
    screen: ListScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
  Edit: {
    screen: EditScreen,
  },
});


const SearchStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      header: null,
    },
  },
  Add: {
    screen: AddScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
});


const Nav = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: () => (<Ionicon name="md-home" size={30} style={styles.icon} />),
    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: () => (<Ionicon name="md-search" size={30} style={styles.icon} />),
    },
  },
}, {
  initialRouteName: 'Home',
});

export default BottomNav;
