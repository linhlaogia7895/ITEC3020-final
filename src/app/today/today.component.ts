import { Component, OnInit } from '@angular/core';
import { ChartService } from '../chart.service';
import { Food } from '../food';
import { TodayServiceService } from '../today-service.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  list: Food[]=[];
  summary: Number[]=[];
  selectedItem?: Food;
  constructor(
    private todayList: TodayServiceService,
    public chart: ChartService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.todayList.getList().subscribe(list => this.list = list);
    
    
  }
  onSelect(food: Food):void{
    this.selectedItem = food;    
  }
  remove(item:Food){
    this.list.splice(this.list.indexOf(item),1);
    this.chart.chart[0] = Number((this.list.reduce((a,b) => a + b.fat, 0)).toFixed(2));
    this.chart.chart[1] = Number((this.list.reduce((a,b) => a + b.cab, 0)).toFixed(2));
    this.chart.chart[2] = Number((this.list.reduce((a,b) => a + b.protein, 0)).toFixed(2));
  delete this.selectedItem;
  }
  

}
