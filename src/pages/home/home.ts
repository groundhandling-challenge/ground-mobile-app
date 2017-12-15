import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ExercisesService } from '../../providers/exercises/exercises';
import { ExercisePage } from '../exercise/exercise';

import * as fromRoot from '../../store/reducers';
import * as completedExercises from '../../store/actions/completedExercises';

@Component({
  selector: 'page-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'home.html'
})
export class HomePage {
  data: any = {};
  completedExercises$: Observable<string[]>;

  constructor(
    public navCtrl: NavController,
    public exercisesService: ExercisesService,
    private store: Store<fromRoot.State>
  ){
    this.data = this.exercisesService.getData();
    this.completedExercises$ = store.select(fromRoot.getCompletedExercisesIds);
  }

  pushPage(exercise) {
    this.navCtrl.push(ExercisePage, { exercise });
  }

  toggleExercise(e: Event, id: string) {
    e.stopPropagation();
    this.store.dispatch({ type: completedExercises.TOGGLE_EXERCISE, payload: id });
  }
}
