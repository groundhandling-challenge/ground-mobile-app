import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchesLevel',
})
export class MatchesLevelPipe implements PipeTransform {
  transform(exercises: any[], level) {
    return exercises.filter(x => x.level === level);
  }
}
