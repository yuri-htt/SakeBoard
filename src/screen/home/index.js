import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UserActions from '../../redux/modules/user';

import ListCard from '../../components/listCard';

import styles from './styles';

class HomeScreen extends Component {
  componentDidMount() {
    const {
      actions,
    } = this.props;
    actions.getUser();
  }

  render() {
    const {
      posts,
    } = this.props.state;

    return (
      <View style={styles.container}>
        <View style={styles.flex}>

          <View style={styles.timeLine}>
            <Text style={styles.headLine}>タイムライン</Text>

            {posts.data && posts.data.length === 0
            && (
            <View style={styles.empty}>
              <Text style={styles.emptyTxt}>まだ飲んだお酒はありません</Text>
              <Text style={styles.emptyTxt}>さっそく今晩飲みに行きませんか？</Text>
            </View>
            )
            }

            {posts.data && posts.data.length > 0
            && (
            <ScrollView style={styles.timeLineCards}>
              <FlatList
                data={posts.data}
                keyExtractor={item => item.key}
                renderItem={item => <ListCard item={item} {...this.props} />}
              />
            </ScrollView>
            )
            }

          </View>

        </View>
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
