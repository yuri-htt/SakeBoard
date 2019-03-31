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
