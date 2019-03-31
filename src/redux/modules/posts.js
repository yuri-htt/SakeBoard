import firebase from 'react-native-firebase';

const initialState = {
  loading: false,
  loaded: false,
  data: [],
};

export default function reducers(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD':
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case 'LOAD_SUCCESS': {
      const data = payload.map(post => ({
        key: post.key,
        ...post.post,
      }));
      return {
        ...state,
        loading: false,
        loaded: true,
        data,
      };
    }
    case 'LOAD_FAIL':
      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload.error,
      };
    default:
      return state;
  }
}

function requestPosts() {
  return {
    type: 'LOAD',
  };
}

function receivePosts(data) {
  return {
    type: 'LOAD_SUCCESS',
    payload: data,
  };
}

function receivePostsFail(err) {
  return {
    type: 'LOAD_FAIL',
    payload: err,
  };
}


export const getPosts = () => (dispatch, getState) => {
  dispatch(requestPosts());

  const { user } = getState();
  const userCollection = firebase.firestore().collection('user');
  const postCollection = firebase.firestore().collection('post');

  postCollection
    .where('user', '==', userCollection.doc(user.uid))
    .limit(100)
    .get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          data.push({
            key: doc.id,
            post: doc.data(),
          });
        }
      });
      dispatch(receivePosts(data));
    })
    .catch(err => dispatch(receivePostsFail(err)));
};
