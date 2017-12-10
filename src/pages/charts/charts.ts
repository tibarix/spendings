import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Chart from "chart.js"
/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {
  // lineChart
  @ViewChild("chart") chart;
  public lineChartData: Array<any> = [
    { data: [], label: 'll' },
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor() {
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    let json = JSON.parse(localStorage.getItem("spendings"));
    let spendings = [];
    let dates = [];
    let labels = [];
    for (let o of json) {
      spendings.push(o.amount);
      if (o.createdAt) {
        dates.push(new Date(o.createdAt).getDate());
      } else {
        dates.push(new Date().getDate());
      }
      labels.push(o.description);
    }
    this.lineChartLabels = dates.slice();
    this.lineChartData = [
      { data: spendings }
    ];

    this.lineChartData = this.lineChartData.slice();
  }
  ionViewWillEnter() {
    this.ionViewDidLoad();
  }
}