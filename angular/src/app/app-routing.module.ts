import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './component/signin/signin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PieComponent } from './component/pie/pie.component';
import { BarComponent } from './component/bar/bar.component';

const routes: Routes = [ {
  path: 'login',
  component: SigninComponent
},
{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
path: 'pie',
component: PieComponent,
},
{
  path:'bar',
  component:BarComponent,
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
