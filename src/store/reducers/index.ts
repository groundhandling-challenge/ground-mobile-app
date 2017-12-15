import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromCompletedExercises from '../reducers/completedExercises';

export interface State {
  completedExercises: fromCompletedExercises.State;
}

export const reducers: ActionReducerMap<State> = {
  completedExercises: fromCompletedExercises.reducer
};

export const getCompletedExercisesState = createFeatureSelector<fromCompletedExercises.State>('completedExercises');

export const getCompletedExercisesIds = createSelector(
  getCompletedExercisesState,
  fromCompletedExercises.getCompletedExercisesIds
);
