import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor(private router: Router) { }

  public user_name: any;

  ngOnInit(): void {
    this.user_name = localStorage.getItem('username_log');
  }

  onLogout() {
    localStorage.setItem('accesstoken', 'hello');
    this.router.navigate(['/login']);
  }
  onHome() {
    this.router.navigate(['/dashboard']);
  }
  onBar() {
    this.router.navigate(['/bar']);
  }
  onPie() {
    this.router.navigate(['/pie']);
  }

}
