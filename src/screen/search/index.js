import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Voice from 'react-native-voice';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import images from '../../components/images';
import styles from './styles';
import CONFIG from '../../config';
import ListModal from '../../components/listModal';
import * as SearchActions from '../../redux/modules/search';

const fetchUrl = 'https://labs.goo.ne.jp/api/hiragana';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    Voice.onSpeechEnd = () => this.onSpeechEnd();
    Voice.onSpeechPartialResults = e => this.onSpeechPartialResults(e);

    this.state = {
      end: false,
      recording: false,
      partialResults: [],
    };
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  render() {
    const {
      end,
      recording,
      partialResults,
    } = this.state;
    const {
      search,
    } = this.props.state;
    const hasSpeechResults = partialResults.length > 0;

    if (search.showModal) {
      return (
        <ListModal {...this.props} />
      );
    }

    return (
      <View style={styles.container}>

        <Text style={styles.guideTxt}>お酒の名前を教えてください。</Text>

        <View style={styles.voiceContainer}>
          <View style={styles.cantering}>
            {this.state.partialResults.map(result => (
              <Text key={result} style={styles.stat}>
                {result}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.mikeContainer}>
          {!recording
          && (
          <TouchableOpacity onPress={() => this.onPressStartRecord()}>
            <Image style={styles.mikeButton} source={images.mike} />
          </TouchableOpacity>
          )
          }
          {recording
          && (
          <TouchableOpacity onPress={() => this.onPressStopRecord()}>
            <Image style={styles.mikeButton} source={images.pause} />
          </TouchableOpacity>
          )
          }
        </View>

        <View style={styles.buttonsContainer}>
          {((hasSpeechResults && !recording) || end)
          && (
          <View>

            <TouchableOpacity onPress={() => this.onPressSearch()} style={styles.primaryBtn}>
              <Text style={styles.primaryBtnTxt}>検索する</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.onPressClear()} style={styles.seondaryBtn}>
              <Text style={styles.secondaryBtnTxt}>クリア</Text>
            </TouchableOpacity>

          </View>
          )
          }
        </View>

      </View>
    );
  }

  onPressStartRecord() {
    this.setState({ recording: true });
    Voice.start('ja-JP');
  }

  onPressStopRecord() {
    this.setState({ recording: false });
    Voice.stop();
  }

  async onPressSearch() {
    const { partialResults } = this.state;
    const { actions } = this.props;

    actions.setModal(true);

    // 配列で検索キーを渡すとAPIからはスペース区切りで変換された値が返却される
    const convertedData = await this.getConvertTxtToKana(partialResults);
    const changeDataToArray = RegExp(' ').test(convertedData.converted) ? convertedData.converted.split(' ') : [convertedData.converted];
    const makeUniqueArray = changeDataToArray.filter((x, i, self) => self.indexOf(x) === i);

    actions.search(makeUniqueArray);
  }

  onPressClear() {
    this.setState({
      end: false,
      partialResults: [],
    });
  }

  onSpeechEnd() {
    Voice.stop();
    this.setState({
      end: true,
      recording: false,
    });
  }

  onSpeechPartialResults(e) {
    this.setState({
      recording: false,
      partialResults: e.value,
    });
  }

  getConvertTxtToKana = txtLists => fetch(fetchUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      app_id: CONFIG.GOO_API_KEY,
      sentence: txtLists,
      output_type: 'katakana',
    }),
  }).then(response => response.json());
}

const mapStatetoProps = (state, props) => ({ state, props });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    ...SearchActions,
  }, dispatch),
});

export default connect(mapStatetoProps, mapDispatchToProps)(SearchScreen);
