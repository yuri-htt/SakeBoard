import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 32,
  },
  header: {
    marginVertical: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  detail: {
    flexDirection: 'row',
  },
  detailTxt: {
    color: '#A2A2A2',
  },
  name: {
    fontSize: 16,
  },
  contentTxt: {
    marginTop: 16,
    color: '#212121',
  },
  dateTxt: {
    marginTop: 16,
    color: '#757575',
  },
});

export default styles;
