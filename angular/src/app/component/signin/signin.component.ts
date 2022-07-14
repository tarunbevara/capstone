import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Integration } from 'src/app/integration';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private integrator:Integration) { }
  // headers: any;
  head = new BehaviorSubject<any>(null);
  ngOnInit() {
  }
  flag: boolean = true;
  alert_msg: any;
  onSubmit(userform: any) {
    console.log(userform.value);
    this.http.post('http://127.0.0.1:5003/register', userform.value).subscribe(data => {
      this.alert_msg = data;
      if (this.alert_msg.message != undefined) {
        alert(this.alert_msg.message);
      }

    }, error => {
      alert('Error');
    }
    );
  }
  dat: any;
  onLogin(userdata: any) {
    // this.http.post('http://127.0.0.1:5003/auth', userdata.value).subscribe(data => {
    //   // console.log(userdata.value.username);
    //   this.dat = data;
    //   const headers = new HttpHeaders().set('content-type', 'application/json').set('Authorization', 'JWT ' + this.dat.access_token);
    //   // this.head.next(headers);
    //   localStorage.setItem('headers', JSON.stringify(headers));
    //   localStorage.setItem('username_log', userdata.value.username);
    //   this.alert_msg = data;
    //   this.set_token(this.alert_msg.access_token);
    //   if (this.alert_msg.message != undefined) {
    //     alert(this.alert_msg.message);
    //   }
    //   this.router.navigate(['/dashboard']);
    // 
    // console.log(userdata.value.username);
    // }, error => {
    //   alert('User Not Found!!');
    // }
    this.integrator.postdata_flask('http://127.0.0.1:5003/auth', userdata.value);
  }
  }

