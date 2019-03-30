import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  Platform,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import * as SearchActions from '../../redux/modules/search';
import CategoryIcon from '../categoryIcon';

const { width } = Dimensions.get('window');

class ListModal extends Component {
  render() {
    const {
      actions,
    } = this.props;
    const {
      search,
    } = this.props.state;

    return (
      <Modal
        animationType="slide"
        onRequestClose={() => actions.setModal(false)}
        transparent
        visible
      >
        <View style={styles.modalContainer}>

          <View style={[styles.modal]}>

            {/* 検索中 */}
            {search.loading
            && (
              <View style={[styles.modal, styles.center, styles.flex]}>
                <ActivityIndicator size="large" color="#FF9800" />
              </View>
            )
            }

            {/* 検索結果をリスト表示 */}
            {search.loaded && search.data.length > 0
            && (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width }}
            >
              {search.data.map(result => (
                <View key={result.name}>
                  {this.renderCandidateListCard(result)}
                </View>
              ))}
            </ScrollView>
            )
            }

            {/* 検索結果が0件 */}
            {search.loaded && search.data.length === 0
            && (
              <View style={[styles.center, styles.flex]}>
                <Text>該当0件</Text>
              </View>
            )
            }

            {search.loaded
            && (
            <TouchableOpacity style={[styles.dismiss]} onPress={() => this.onPressDismiss()}>
              <Ionicon name="ios-close-circle-outline" size={50} />
            </TouchableOpacity>
            )
            }
          </View>


        </View>
      </Modal>
    );
  }

  renderCandidateListCard(item) {
    return (
      <TouchableOpacity onPress={() => this.onPressCard()} key={item.name} style={styles.cardContainer}>
        <View style={[Platform.OS === 'ios' ? styles.candidateCardforiOS : styles.candidateCardforAndroid]}>

          <CategoryIcon categoryName={item.categoryName} style={styles.icon} />

          <View style={styles.flex}>
            <Text style={styles.categoryCardTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            <View style={styles.detail}>
              {!!item.areaName && !item.companyName
                && <Text style={styles.detailTxt} numberOfLines={1}>{item.areaName}</Text>
              }
              {!!item.companyName && !item.areaName
                && <Text style={styles.detailTxt} numberOfLines={1}>{item.companyName}</Text>
              }
              {!!item.areaName && !!item.companyName
                && <Text style={styles.detailTxt} numberOfLines={1}>{`${item.areaName}  ${item.companyName}`}</Text>
              }
            </View>
          </View>

        </View>
      </TouchableOpacity>
    );
  }

  onPressCard() {
    // 選択したお酒を登録する画面へ遷移する
  }

  onPressDismiss() {
    const {
      actions,
    } = this.props;
    actions.setModal(false);
  }
}

const mapStatetoProps = (state) => {
  const { records } = state;
  return { records };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...SearchActions,
  }, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(ListModal);
