import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import { ChartService } from '../chart.service';
export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
};
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class MyChartComponent  {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;
  constructor( private info: ChartService ) { 
    this.chartOptions = {
      series: [this.info.chart[0],this.info.chart[1],this.info.chart[2]],
      chart: {
        width: 600,
        type: "pie"
      },
      labels: ["Fat", "Cabohydrate", "Protein"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
