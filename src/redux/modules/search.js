import algoliasearch from 'algoliasearch/reactnative';

import CONFIG from '../../config';

const algolia = algoliasearch(CONFIG.ALGOLIA_ID, CONFIG.ALGOLIA_ADMIN_KEY);

const initialState = {
  loading: false,
  loaded: false,
  showModal: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_MODAL':
      return {
        ...state,
        showModal: payload.visible,
      };
    case 'SEARCH':
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case 'SEARCH_SUCCESS': {
      const [result] = payload.data.results;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: result.hits,
      };
    }
    case 'SEARCH_FAIL':
      return {
        ...state,
        loading: false,
        loaded: false,
        error: payload.err,
      };
    default:
      return state;
  }
};

export function setModal(visible) {
  return {
    type: 'SET_MODAL',
    payload: {
      visible,
    },
  };
}

function requestSearch() {
  return {
    type: 'SEARCH',
  };
}

function receiveSearchResolts(data) {
  return {
    type: 'SEARCH_SUCCESS',
    payload: {
      data,
    },
  };
}

function receiveSearchResoltsFail(err) {
  return {
    type: 'SEARCH_FAIL',
    payload: {
      err,
    },
  };
}

export const search = keyWords => (dispatch) => {
  dispatch(requestSearch());

  const queries = [];
  keyWords.forEach((keyWord) => {
    queries.push({
      indexName: 'masterSake',
      query: keyWord,
    });
  });

  algolia.search(queries, (err, data) => {
    if (err) {
      dispatch(receiveSearchResoltsFail(err));
      return;
    }

    dispatch(receiveSearchResolts(data));
  });
};
