import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodServiceService } from '../food-service.service';
import { TodayServiceService } from '../today-service.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodList: Food[] = [];
  selectedItem?: Food;
  constructor( 
    private foodService: FoodServiceService,
    private todayService: TodayServiceService
    ) { }

  ngOnInit(): void {
    this.getFoodList();

  }
  getFoodList(){
    this.foodService.getFood().subscribe(foodList => this.foodList = foodList);
  }
  onSelect(food: Food):void{
    this.selectedItem = food;    
  }
  addToday(food: Food){
    this.todayService.addFood(food);
  }

}
