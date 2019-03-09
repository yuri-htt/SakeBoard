import firebase from 'react-native-firebase';

export default function getUser() {
  firebase.auth().signInAnonymously()
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}
