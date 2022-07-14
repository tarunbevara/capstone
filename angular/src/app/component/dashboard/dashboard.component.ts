import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private router: Router) { }

  public user_name: any;

  ngOnInit(): void {
    this.user_name = localStorage.getItem('username_log');
  }

  onLogout() {
    localStorage.setItem('accesstoken', 'hello');
    this.router.navigate(['/login']);
  }

  onPie() {
    console.log('ok');
    this.router.navigate(['/pie']);
  }
  onBar() {
    this.router.navigate(['/bar']);
  }

}

