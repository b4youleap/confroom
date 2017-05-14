import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  isDarkTheme: boolean = false;
  isLoggedIn = false;

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log('click. You are now logged in.');
    this.isLoggedIn = true;
  }

  logout() {
    console.log('click. You are now logged out.');
    this.isLoggedIn = false;
  }

}
