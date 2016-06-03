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
      new Meal("Garbage", "I ate 5 servings", 0, "9001"),
      new Meal("A Goldfish", "I ate 79 servings", 1, "4"),
      new Meal("Soylent Green", "I ate 2 servings", 2, "300"),
      new Meal("The Blood of my Enemies", "I ate 503 servings", 3, "9001")
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
