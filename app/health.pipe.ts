import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "health",
  pure: false
})
export class HealthPipe implements PipeTransform {
  transform(input: Meal[], args) {
    console.log('selected meal: ', args[1]);
    var healthState = args[0];
    if(healthState === "healthy") {
      return input.filter((meal) => {
        return meal.health;
      });
    } else if (healthState === "unHealthy") {
      return input.filter((meal) => {
        return !meal.health;
      });
    } else {
      return input;
    }
  }
}
