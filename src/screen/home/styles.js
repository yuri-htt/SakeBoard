import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width,
    height,
    backgroundColor: '#FFF',
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  flex: {
    flex: 1,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  headLine: {
    fontSize: 30,
    color: '#212121',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  timeLine: {
    flex: 1,
    marginTop: 32,
  },
  timeLineCards: {
    marginTop: 16,
    marginBottom: 32,
  },
  empty: {
    flex: 1,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTxt: {
    fontSize: 16,
    height: 16 * 1.3,
  },
});

export default styles;
