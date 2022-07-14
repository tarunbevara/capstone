import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgepieComponent } from './component/agepie/agepie.component';
import { PieComponent } from './component/pie/pie.component';
import { RegionpieComponent } from './component/regionpie/regionpie.component';
import { SexpieComponent } from './component/sexpie/sexpie.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { Integration } from './integration';
import { InterceptorService } from './interceptor';
import { AgebarComponent } from './component/agebar/agebar.component';
import { RegionbarComponent } from './component/regionbar/regionbar.component';
import { SexbarComponent } from './component/sexbar/sexbar.component';
import { BarComponent } from './component/bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    AgepieComponent,
    PieComponent,
    RegionpieComponent,
    SexpieComponent,
    AgebarComponent,
    RegionbarComponent,
    SexbarComponent,
    BarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })
  ],
  providers: [SigninComponent,Integration,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
