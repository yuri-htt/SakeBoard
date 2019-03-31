import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoryIcon from '../../components/categoryIcon';
import styles from './styles';

class AddScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starCount: 0,
      text: '',
    };
  }

  render() {
    const {
      starCount,
      text,
    } = this.state;

    const {
      post,
    } = this.props;
    const selectedPost = post.data;

    return (

      <View style={styles.container}>

        {post.loading
        && (
          <View style={[styles.modal, styles.center, styles.flex]}>
            <ActivityIndicator size="large" color="#FF9800" />
          </View>
        )
        }

        {post.loaded
        && (
        <View style={[styles.contents]}>

          <View style={styles.sake}>

            <CategoryIcon categoryName={selectedPost.categoryName} size={50} style={{ marginRight: 16 }} />

            <View style={styles.flex}>
              <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">{selectedPost.name}</Text>
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

          <View style={[styles.row, styles.starContainer]}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              selectedStar={rating => this.onPressStarRating(rating)}
              starSize={28}
              buttonStyle={{ marginHorizontal: 8 }}
              fullStarColor="orange"
              emptyStarColor="orange"
            />
          </View>

          <View style={styles.textInputContainer}>
            <TextInput
              multiline
              style={[styles.textInput]}
              underlineColorAndroid="transparent"
              placeholder="お酒の感想を記載しましょう"
              textAlignVertical="top"
              value={text}
              onChangeText={this.onChangeText}
            />
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={() => this.onPressSave()} style={styles.primaryBtn}>
              <Text style={styles.primaryBtnTxt}>保存する</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onPressCancel()} style={styles.seondaryBtn}>
              <Text style={styles.secondaryBtnTxt}>キャンセル</Text>
            </TouchableOpacity>
          </View>
        </View>
        )
        }
      </View>
    );
  }

  onPressStarRating(rating) {
    this.setState({
      starCount: rating,
    });
  }

  onChangeText(text) {
    this.setState({ text });
  }

  onPressSave() {
    // 保存処理
  }

  onPressCancel() {
    const { navigation } = this.props;
    navigation.pop();
  }
}

const mapStatetoProps = (state) => {
  const { post } = state;
  return { post };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStatetoProps, mapDispatchToProps)(AddScreen);
