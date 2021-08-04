import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { GuruComponent } from './guru/guru.component';
import { GuruDetailComponent } from './guru-detail/guru-detail.component';
import { FormsModule } from '@angular/forms';
import { KepalaComponent } from './kepala/kepala.component';
import { KatalogComponent } from './katalog/katalog.component';

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
        path:'kepala',
        component: KepalaComponent
      }, 
      {
        path:'katalog',
        component: KatalogComponent
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
    GuruDetailComponent,
    KepalaComponent,
    KatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule
  ]
})
export class AdminModule { }
