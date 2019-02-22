import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ADD SCREEN</Text>
      </View>
    );
  }
}

export default AddScreen;
