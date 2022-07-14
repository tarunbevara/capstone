import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

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
    this.router.navigate(['/pie']);
  }

  onBar() {
    this.router.navigate(['/bar']);
  }

  onHome() {
    this.router.navigate(['/dashboard']);
  }

}
