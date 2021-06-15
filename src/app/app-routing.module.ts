import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/register'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
