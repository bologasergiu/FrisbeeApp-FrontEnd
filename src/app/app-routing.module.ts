import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterPageComponent} from "./features/pages/register-page/register-page.component";
import {LoginPageComponent} from "./features/pages/login-page/login-page.component";
import {CommonModule} from "@angular/common";
import {AdminPageComponent} from "./features/pages/admin-page/admin-page.component";
import {AdminGuard} from "./core/guards/admin.guard";
import {CoachGuard} from "./core/guards/coach.guard";
import {PlayerGuard} from "./core/guards/player.guard";
import {PlayerPageComponent} from "./features/pages/player-page/player-page.component";
import {CoachPageComponent} from "./features/pages/coach-page/coach-page.component";
import {AuthGuardServiceGuard} from "./core/guards/auth-guard-service.guard";
import {UserDetailsComponent} from "./core/components/user-details/user-details.component";

import {
  TeamManagementComponent
} from "./core/components/team-management/team-management.component";
import {
  UserManagementComponent
} from "./core/components/user-management/user-management.component";

const routes: Routes = [
  {
    path: '',  redirectTo:'/login',  pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
  },
  {
    path: 'teams-management',
    component: TeamManagementComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
  },
  {
    path: 'teams-management',
    component: UserDetailsComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
  },
  {
    path: 'teams-management',
    component: UserManagementComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
  },
  {
    path: 'users-management',
    component: UserManagementComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
  },
  {
    path: 'player',
    component: PlayerPageComponent,
    canActivate: [PlayerGuard]
  },
  {
    path: 'coach',
    component: CoachPageComponent,
    canActivate: [CoachGuard]
  },
  {
    path: 'user',
    component: UserDetailsComponent,
    canActivate: [AuthGuardServiceGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
