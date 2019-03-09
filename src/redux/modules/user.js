import firebase from 'react-native-firebase';

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

export const getUser = () => (dispatch) => {
  dispatch(setUser());
  firebase.auth().signInAnonymously()
    .then(() => {
      dispatch(setUserSuccess(firebase.auth().currentUser.uid));
    })
    .catch((error) => {
      dispatch(setUserFail(error));
    });
};
