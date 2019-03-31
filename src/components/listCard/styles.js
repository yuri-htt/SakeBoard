import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 12,
    borderRadius: 4,
    borderWidth: 0.2,
    borderColor: '#BDBDBD',
    shadowRadius: 2,
    padding: 16,
    flexDirection: 'row',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginHorizontal: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  leftColumn: {
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 1,
  },
  titleText: {
    color: '#212121',
    fontSize: 16,
    lineHeight: 16 * 1.3,
  },
  text: {
    color: '#757575',
    fontSize: 12,
  },
  time: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 12,
    color: '#999',
  },
  stars: {
    marginTop: 8,
  },
});

export default styles;
