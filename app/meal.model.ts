export class Meal {
  public healthy: boolean;
  constructor(public description: string, public information: string, public id: number, public calorie: string) {
    if(parseInt(calorie) > 300){
      this.healthy = true;
    }
  }
}
