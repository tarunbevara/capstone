import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { pie_chart } from './agepie.model';

@Component({
  selector: 'app-agepie',
  templateUrl: './agepie.component.html',
  styleUrls: ['./agepie.component.css']
})
export class AgepieComponent implements OnInit {
_chartOption: EChartsOption = {};
constructor(private http: HttpClient, private router: Router) { }
kee: any;
get_chart_data() {
//   // var kee = localStorage.getItem('accesstoken');
//   // if (kee == 'hello') {
//   //   this.router.navigate(['/login']);
//  }
  this.http.get<pie_chart[]>('http://127.0.0.1:5003/records/age_pie'
  //  { headers: new HttpHeaders({ 'Authorization': 'JWT ' + kee }) }
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
        text: 'Age Groups of People Smoking in USA',
        subtext: 'Pie',
        left: 'center'
      },
      backgroundColor: "rgba(255,255,255,1)",
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
  }
}

