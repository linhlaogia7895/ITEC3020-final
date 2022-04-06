import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartService } from './chart.service';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class TodayServiceService {
  todayList: Food[] = [];
  constructor(private chart: ChartService) { }
  getList(): Observable<Food[]>{
    return of(this.todayList.sort((a,b)=>a.id-b.id));
  }
  addFood(food: Food){
    this.todayList.push(food);
    this.chart.chart[0] = Number((this.todayList.reduce((a,b) => a + b.fat, 0)).toFixed(2));
    this.chart.chart[1] = Number((this.todayList.reduce((a,b) => a + b.cab, 0)).toFixed(2));
    this.chart.chart[2] = Number((this.todayList.reduce((a,b) => a + b.protein, 0)).toFixed(2));
  }
}