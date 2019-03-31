import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import moment from 'moment';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryIcon from '../../components/categoryIcon';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class DetailScreen extends Component {
  render() {
    const { post } = this.props.state;
    const postedDate = moment(post.timestamp).format('MM月DD日');
    const selectedPost = post.data;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <CategoryIcon categoryName={selectedPost.categoryName} size={60} style={styles.icon} />
          <View style={styles.flex}>
            <Text style={styles.name} numberOfLines={2}>{selectedPost.name}</Text>
            <View style={styles.detail}>
              {!!selectedPost.areaName && !selectedPost.companyName
                && <Text style={styles.detailTxt} numberOfLines={1}>{selectedPost.areaName}</Text>
              }
              {!!selectedPost.companyName && !selectedPost.areaName
                && <Text style={styles.detailTxt} numberOfLines={1}>{selectedPost.companyName}</Text>
              }
              {!!selectedPost.areaName && !!selectedPost.companyName
                && <Text style={styles.detailTxt} numberOfLines={1}>{`${selectedPost.areaName}  ${selectedPost.companyName}`}</Text>
              }
            </View>
          </View>
        </View>
        <View style={styles.stars}>
          <StarRating
            disabled
            maxStars={5}
            rating={selectedPost.starCount}
            starSize={16}
            starStyle={{ marginRight: 4 }}
            containerStyle={{ justifyContent: 'flex-start' }}
            fullStarColor="orange"
            emptyStarColor="orange"
          />
        </View>
        <Text style={styles.contentTxt}>{selectedPost.text}</Text>
        <Text style={styles.dateTxt}>{postedDate}</Text>

      </View>
    );
  }
}

const mapStatetoProps = (state, props) => ({ state, props });

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStatetoProps, mapDispatchToProps)(DetailScreen);
