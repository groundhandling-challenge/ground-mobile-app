import { Component, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ExercisesService } from '../../providers/exercises/exercises';

import * as fromRoot from '../../store/reducers';
import * as completedExercises from '../../store/actions/completedExercises';

@Component({
  selector: 'page-exercise',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'exercise.html',
})
export class ExercisePage {
  @ViewChild(Slides) slides: Slides;

  data: any = {};
  initialIndex: number = 0;
  activeLevel: string = '';
  completedExercises$: Observable<string[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public exercisesService: ExercisesService,
    private store: Store<fromRoot.State>
  ){
    this.data = this.exercisesService.getData();
    this.initialIndex = this.data.exercises.findIndex(x => x.id === navParams.get('exercise').id);
    this.activeLevel = this.data.exercises[this.initialIndex].level;
    this.completedExercises$ = store.select(fromRoot.getCompletedExercisesIds);
  }

  slideWillChange() {
    if (this.data.exercises[this.slides.getActiveIndex()] !== undefined) {
      this.activeLevel = this.data.exercises[this.slides.getActiveIndex()].level;
    }
  }

  toggleExercise(e: Event, id: string) {
    e.stopPropagation();
    this.store.dispatch({ type: completedExercises.TOGGLE_EXERCISE, payload: id });
  }
}
