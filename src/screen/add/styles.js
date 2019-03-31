import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  contents: {
    flex: 1,
  },
  sake: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  name: {
    fontSize: 20,
  },
  detail: {
    flexDirection: 'row',
  },
  detailTxt: {
    color: '#A2A2A2',
  },
  row: {
    flexDirection: 'row',
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    height: 50,
  },
  textInputContainer: {
    height: 180,
    marginBottom: 32,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtn: {
    marginVertical: 8,
    width: 280,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seondaryBtn: {
    marginVertical: 8,
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
});

export default styles;
