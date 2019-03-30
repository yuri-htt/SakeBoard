import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 32,
    paddingBottom: 32,
  },
  modal: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 32,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    marginHorizontal: 32,
  },
  candidateCardforAndroid: {
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    elevation: 1,
  },
  candidateCardforiOS: {
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    backgroundColor: '#FFF',
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
  dismiss: {
    marginTop: 32,
  },
});

export default styles;
