import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  templateUrl: 'app/htmlUrl/new-meal.component.html'
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userDescription: HTMLInputElement, calorieCount: HTMLSelectElement){
    // debugger;

    var newMeal = new Meal(userDescription.value, 0, calorieCount.value);
    this.onSubmitNewMeal.emit(newMeal);
    calorieCount.value = "";
    userDescription.value = "";
  }
}
