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
import {AddTeamComponent} from "./features/components/admin-components/add-team/add-team.component";
import {DeleteUserComponent} from "./features/components/admin-components/delete-user/delete-user.component";
import {TeamsListComponent} from "./features/components/admin-components/teams-list/teams-list.component";
import {
  TeamManagementComponent
} from "./features/components/admin-components/team-management/team-management.component";

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
    path: 'teams-management/add-team',
    component: AddTeamComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
  },
  {
    path: 'users-management',
    component: DeleteUserComponent,
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
