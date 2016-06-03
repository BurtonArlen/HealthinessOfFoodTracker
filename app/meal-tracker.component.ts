import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMeal } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import {HealthPipe} from './health.pipe';


@Component({
  selector: 'meal-tracker',
  inputs: ['mealList'],
  pipes: [HealthPipe],
  outputs: ['onMealSelect'],
  directives: [MealComponent, EditMeal, NewMealComponent],
  templateUrl: 'app/htmlUrl/meal-tracker.component.html'
})
export class MealTrackerComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterDone: string = "notHealthy";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(meal: Meal): void {
    meal.id = this.mealList.length;
    this.mealList.push(meal);
  }
  onChange(filterOption) {
  this.filterDone = filterOption;
  console.log(this.filterDone);
  }
}
