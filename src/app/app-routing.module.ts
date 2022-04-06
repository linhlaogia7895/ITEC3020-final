import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyChartComponent } from './chart/chart.component';
import { FoodListComponent } from './food-list/food-list.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  {path: 'home', redirectTo: '/foodList', pathMatch: 'full' },
  {path: 'foodList', component: FoodListComponent },
  {path: 'today', component: TodayComponent },
  {path: 'chart', component: MyChartComponent },
  {path: '', redirectTo: '/foodList', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
