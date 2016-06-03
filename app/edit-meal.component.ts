import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  templateUrl: 'app/htmlUrl/edit-meal.component.html'
})
export class EditMeal {
  public meal: Meal;
}
