import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  guideTxt: {
    fontSize: 16,
    marginBottom: 32,
  },
  voiceContainer: {
    flexDirection: 'row',
    padding: 16,
    borderColor: '#DDD',
    borderWidth: 1,
    width: width - 64,
    height: 150,
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  cantering: {
    // flexDirection: 'row',
    // height: 100,
    justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
  mikeContainer: {
    marginTop: 32,
    marginBottom: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mikeButton: {
    width: 50,
    height: 50,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 88,
  },
  primaryBtn: {
    marginBottom: 16,
    width: 280,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seondaryBtn: {
    width: 280,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnTxt: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  seondaryBtnTxt: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  stat: {
    color: '#212121',
    fontSize: 14,
    lineHeight: 14 * 1.3,
    paddingRight: 8,
    textAlign: 'center',
  },
});

export default styles;
