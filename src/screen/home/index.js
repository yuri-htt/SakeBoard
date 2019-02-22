import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HOME SCREEN</Text>
      </View>
    );
  }
}

export default HomeScreen;
