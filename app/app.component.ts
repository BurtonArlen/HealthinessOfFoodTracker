import { Component, EventEmitter } from 'angular2/core';
import { MealTrackerComponent } from './meal-tracker.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'my-app',
  directives: [MealTrackerComponent],
  templateUrl: 'app/htmlUrl/app.component.html'
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Salad", "With ranch dressing", 0, "350"),
      new Meal("Celery", "I ate 4 servings", 1, "5"),
      new Meal("Chicken Wrap", "No cheese", 2, "300"),
      new Meal("The Blood of my Enemies", "Was delicious", 3, "210")
    ];
  }
}
