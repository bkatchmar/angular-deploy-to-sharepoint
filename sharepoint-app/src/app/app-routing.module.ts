import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { environment } from './../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'sites/EngageUniversity/SitePages/AngularApp/Index.aspx', redirectTo: 'sites/EngageUniversity/SitePages/AngularApp/Index.aspx/counter', pathMatch: 'full' },
  { path: 'sites/EngageUniversity/SitePages/AngularApp/Index.aspx/counter', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }