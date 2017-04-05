import {
  Action,
  Reducer
} from 'redux';
export enum ActionType {
  INCREMENT
}

export const INITIAL_STATE: AppState = {
  counter: 0,
};

export interface AppState {
  counter: number;
}

export interface AppAction extends Action {
  payload?: any;
}

export const reducer: Reducer<AppState> = (state: AppState, action: AppAction): AppState => {

  if (!action) {
    return state;
  }

  switch (action.type) {

    case ActionType.INCREMENT:
      return { counter: state.counter + 1 };

    default:
      return state;
  }
};
