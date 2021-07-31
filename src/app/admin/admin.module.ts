import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { GuruComponent } from './guru/guru.component';
import { GuruDetailComponent } from './guru-detail/guru-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'guru',
        component: GuruComponent
      }, 
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/dashboard'
      }

    ]
  }
]


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    GuruComponent,
    GuruDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
