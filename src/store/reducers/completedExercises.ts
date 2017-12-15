import * as completedExercises from '../actions/completedExercises';
import { xor as _xor } from 'lodash';

export interface State {
  ids: string[];
};

const initialState: State = {
  ids: []
};

export function reducer(state: State = initialState, action: completedExercises.Actions): State {
  switch (action.type) {
    case completedExercises.TOGGLE_EXERCISE: {
      return Object.assign({}, state, {
        ids: _xor([action.payload], state.ids)
      });
    }

    default: return state;
  }
}

export const getCompletedExercisesIds = (state: State) => state.ids;
