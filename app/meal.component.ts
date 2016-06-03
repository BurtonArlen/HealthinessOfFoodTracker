import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
    templateUrl: 'app/htmlUrl/meal.component.html'
})
export class MealComponent {
  public meal: Meal;
  toggleDone(setState: boolean){
    this.meal.healthy = setState;
  }
}
