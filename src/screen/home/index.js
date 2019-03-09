import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../redux/modules/user';

import styles from './styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //
    };
  }

  componentDidMount() {
    const {
      actions,
    } = this.props;
    actions.getUser();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HOME SCREEN</Text>
      </View>
    );
  }
}

const mapStatetoProps = (state, props) => ({ state, props });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...UserActions,
  }, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(HomeScreen);
