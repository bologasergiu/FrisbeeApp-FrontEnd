import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterPageComponent} from "./features/pages/register-page/register-page.component";
import {LoginPageComponent} from "./features/pages/login-page/login-page.component";
import {CommonModule} from "@angular/common";
import {ViewDataPageComponent} from "./features/pages/view-data-page/view-data-page.component";


const routes: Routes = [
  {
    path: '',  redirectTo:'/login',  pathMatch: 'full'
  },
  {
    path: 'register', component: RegisterPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'view-data-page', component: ViewDataPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
