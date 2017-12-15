import { Action } from '@ngrx/store';

export const TOGGLE_EXERCISE = '[Exercises] Toggle Exercise';

export class ToggleExercise implements Action {
  readonly type = TOGGLE_EXERCISE;
  constructor(public payload: string) {}
}

export type Actions = ToggleExercise;
