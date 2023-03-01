import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  showToday = false; // Whether to show or hide the sheet modal component

  cards = [1,2,3,4,5,6]; // Some data for our home page

  constructor() {}

}
