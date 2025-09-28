import type { State, Action } from "./actions";

export const initialState: State = {
  launches: [],
  loading: false,
  error: null,
  selected: null,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "fetch_start":
      return { ...state, loading: true, error: null };
    case "fetch_success":
      return { ...state, loading: false, launches: action.payload };
    case "fetch_error":
      return { ...state, loading: false, error: action.payload };
    case "select_launch":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}