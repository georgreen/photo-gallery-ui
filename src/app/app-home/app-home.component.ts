import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

}
