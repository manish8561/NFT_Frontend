const START_STOP_LOADING = "START_STOP_LOADING";

const initialState = {
  loading: false
};

export default function loading(state = initialState, action = {}) {
  switch (action.type) {
    case START_STOP_LOADING:
      return {
        loading: action.result
      };

    default:
      return state;
  }
}

export function startStopLoading(status) {
  return {
    type: START_STOP_LOADING,
    result: status
  };
}
