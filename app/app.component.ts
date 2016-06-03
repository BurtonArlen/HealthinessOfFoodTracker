import { Component, EventEmitter } from 'angular2/core';
import { MealTrackerComponent } from './meal-tracker.component';
import { Meal } from './meal.model';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'my-app',
  directives: [MealTrackerComponent],
  template: `
    <div class="container">
      <h1>To-Do List</h1>
      <meal-tracker
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-tracker>
    <div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Garbage", 0, 9001),
      new Meal("A Goldfish", 1, 9001),
      new Meal("Soylent Green", 2, 9001),
      new Meal("The Blood of my Enemies", 3, 9001)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
