import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <select name="priority" class="filter" #setPriority>
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high" selected="selected">High</option>
  </select>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <button (click)="addMeal(newDescription, setPriority)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userDescription: HTMLInputElement, mealPriority: HTMLSelectElement){
    // debugger;

    var newMeal = new Meal(userDescription.value, 0, mealPriority.value);
    this.onSubmitNewMeal.emit(newMeal);
    mealPriority.value = "normal";
    userDescription.value = "";
  }
}
