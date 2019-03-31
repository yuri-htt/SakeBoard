import firebase from 'react-native-firebase';

const initialState = {
  loading: false,
  loaded: false,
  data: {},
};

export default function reducers(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT':
      return {
        loading: false,
        loaded: true,
        data: payload,
      };
    case 'CLEAR': {
      return {
        initialState,
      };
    }
    case 'CREATE': {
      return {
        ...state,
        creating: true,
        created: false,
      };
    }
    case 'CREATE_SUCCESS': {
      return {
        ...state,
        creating: false,
        created: true,
      };
    }
    case 'CREATE_FAIL': {
      return {
        ...state,
        creating: false,
        created: true,
        error: payload,
      };
    }
    default:
      return state;
  }
}

export function select(item) {
  return {
    type: 'SELECT',
    payload: item,
  };
}

function create() {
  return {
    type: 'CREATE',
  };
}

function createSuccess() {
  return {
    type: 'CREATE_SUCCESS',
  };
}

function createFail(err) {
  return {
    type: 'CREATE_FAIL',
    payload: err,
  };
}

export const createPost = item => (dispatch, getState) => {
  dispatch(create());

  const { user, post } = getState();
  const userCollection = firebase.firestore().collection('user');
  const postCollection = firebase.firestore().collection('post');
  const selectedPost = post.data;

  const data = {
    categoryId: selectedPost.categoryId,
    categoryName: selectedPost.categoryName,
    name: selectedPost.name,
    areaName: selectedPost.areaName,
    companyName: selectedPost.companyName,
    starCount: item.starCount,
    text: item.text,
    timestamp: Date.now(),
    user: userCollection.doc(user.uid),
  };

  postCollection.add(data)
    .then(() => {
      dispatch(createSuccess());
    })
    .catch(e => createFail(e));
};
