import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PostActions from '../../redux/modules/post';

import CategoryIcon from '../categoryIcon';

import styles from './styles';

class ListCard extends Component {
  render() {
    const {
      item,
    } = this.props;

    const post = {
      ...item.item,
      key: item.item.key,
    };

    const postedDate = moment(item.timestamp).format('MM月DD日');

    return (
      <TouchableOpacity onPress={() => this.onPressCard(post)}>
        <View style={styles.container} onLayout={this.onLayout}>

          <View style={styles.leftColumn}>
            <CategoryIcon categoryName={post.categoryName} style={{ marginRight: 16 }} />
          </View>

          <View style={styles.rightColumn}>
            {post.name != '' && (
              <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">{post.name}</Text>
            )}
            <Text style={styles.text}>{postedDate}</Text>
            <View style={styles.stars}>
              <StarRating
                disabled
                maxStars={5}
                rating={post.starCount}
                starSize={12}
                starStyle={{ marginRight: 2 }}
                containerStyle={{ justifyContent: 'flex-start' }}
                fullStarColor="orange"
                emptyStarColor="orange"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onPressCard(post) {
    const {
      actions,
      navigation,
    } = this.props;

    actions.select(post);
    navigation.push('Detail');
  }
}

const mapStatetoProps = (state) => {
  const { posts } = state;
  return { posts };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...PostActions,
  }, dispatch),
});
export default connect(mapStatetoProps, mapDispatchToProps)(ListCard);
