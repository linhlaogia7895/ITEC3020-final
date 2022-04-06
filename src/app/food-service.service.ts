import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Food } from './food';
import { Foods } from './mock-food';
import { TodayServiceService } from './today-service.service';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  constructor(private todayList: TodayServiceService) { }
  getFood(): Observable<Food[]>{
    return of(Foods);
  }
  addToday(food:Food){
    this.todayList.addFood(food);
  }
}
