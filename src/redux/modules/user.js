import firebase from 'react-native-firebase';

import { getPosts } from './posts';

const initialState = {
  loading: false,
  loaded: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER':
      return {
        loading: true,
        loaded: false,
      };
    case 'SET_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        loaded: true,
        uid: payload.uid,
      };
    case 'SET_USER_FAIL':
      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload.error,
      };
    case 'SET_USER_WITH_UID':
      return {
        ...state,
        uid: payload.uid,
      };
    default:
      return state;
  }
};

function setUser() {
  return {
    type: 'SET_USER',
  };
}

function setUserSuccess(uid) {
  return {
    type: 'SET_USER_SUCCESS',
    payload: {
      uid,
    },
  };
}

function setUserFail(err) {
  return {
    type: 'SET_USER_FAIL',
    payload: {
      err,
    },
  };
}

function setUserWithUid(uid) {
  return {
    type: 'SET_USER_WITH_UID',
    payload: {
      uid,
    },
  };
}

export const getUser = () => (dispatch) => {
  dispatch(setUser());

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUserWithUid(user.uid));
      dispatch(getPosts());
    } else {
      firebase.auth().signInAnonymously()
        .then(() => {
          dispatch(setUserSuccess(firebase.auth().currentUser.uid));
        })
        .catch((error) => {
          dispatch(setUserFail(error));
        });
    }
  });
};
