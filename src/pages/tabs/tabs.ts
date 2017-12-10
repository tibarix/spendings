import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChartsPage } from '../charts/charts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  homeTab = HomePage;
  chartsTab = ChartsPage;

  constructor() {
    let api_key = "AIzaSyCcqMsU_4tVuiqG5Y-Gpprn3n-7PWwmtv0",android="AIzaSyCH58pMJ72yaQa_albqDyXdk4neqiJkNac"
  }
}