import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { bar_chart } from './sexbar.model';

@Component({
  selector: 'app-sexbar',
  templateUrl: './sexbar.component.html',
  styleUrls: ['./sexbar.component.css']
})
export class SexbarComponent implements OnInit {
_chartOption: EChartsOption = {};
constructor(private http: HttpClient, private router: Router) { }
kee: any;
get_chart_data() {
  // var kee = localStorage.getItem('accesstoken');
  // if (kee == 'hello') {
  //   this.router.navigate(['/login']);
  //}
  this.http.get<bar_chart[]>('http://127.0.0.1:5003/records/sex_bar' 
  // { headers: new HttpHeaders({ 'Authorization': 'JWT ' + kee }) }
  )
  .subscribe(result => {
    this.drawchart(result);
  });
}
  ngOnInit(): void {
    this.get_chart_data();
  }
  private drawchart(data: any) {
    this._chartOption = {
      title: {
        text: 'Gender wise data of smokers in USA'
      },
      backgroundColor: "rgba(255,255,255,1)",
      xAxis: {
        type: 'category',
        data: ['female','male']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: data,
          type: 'bar',
          showBackground: false,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }
  }

}
      