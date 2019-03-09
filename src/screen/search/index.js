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

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults;

    this.state = {
      recording: false,
      partialResults: [],
    };
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  render() {
    const {
      recording,
      partialResults,
    } = this.state;
    const hasResults = partialResults.length > 0;

    return (
      <View style={styles.container}>

        <Text style={styles.guideTxt}>お酒の名前を教えてください。</Text>

        <View style={styles.voiceContainer}>
          <View style={styles.cantering}>
            {this.state.partialResults.map(result => (
              <Text key={result} ellipsizeMode="wordWrapping" style={styles.stat}>
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
          {hasResults && !recording
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

  onPressSearch() {
    // 検索処理
  }

  onPressClear() {
    this.setState({ partialResults: [] });
  }

  onSpeechPartialResults = (e) => {
    this.setState({
      partialResults: e.value,
    });
  };
}

const mapStatetoProps = (state, props) => ({ state, props });

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

export default connect(mapStatetoProps, mapDispatchToProps)(SearchScreen);
