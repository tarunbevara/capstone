import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { EChartsOption } from 'echarts';
import { bar_chart } from './regionbar.model';

@Component({
  selector: 'app-regionbar',
  templateUrl: './regionbar.component.html',
  styleUrls: ['./regionbar.component.css']
})
export class RegionbarComponent implements OnInit {
_chartOption: EChartsOption = {};
constructor(private http: HttpClient, private router: Router) { }
kee: any;
get_chart_data() {
  // var kee = localStorage.getItem('accesstoken');
  // if (kee == 'hello') {
  //   this.router.navigate(['/login']);
  //}
  this.http.get<bar_chart[]>('http://127.0.0.1:5003/records/region_bar' 
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
        text: 'Number of smokers from different regions in USA'
      },
      backgroundColor: "rgba(255,255,255,1)",
      xAxis: {
        type: 'category',
        data: ['northwest','southwest','northeast','southeast']
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
      
