import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterPageComponent} from "./features/pages/register-page/register-page.component";
import {LoginPageComponent} from "./features/pages/login-page/login-page.component";
import {CommonModule} from "@angular/common";
import {AdminPageComponent} from "./features/pages/admin-page/admin-page.component";
import {AdminGuard} from "./core/guards/admin.guard";
import {CoachGuard} from "./core/guards/coach.guard";
import {PlayerGuard} from "./core/guards/player.guard";
import {AuthGuardServiceGuard} from "./core/guards/auth-guard-service.guard";
import {UserDetailsComponent} from "./core/components/user-details/user-details.component";
import {TeamManagementComponent} from "./core/components/team-management/team-management.component";
import {UserManagementComponent} from "./core/components/user-management/user-management.component";
import {PlayerTimeOffRequestsComponent} from "./features/components/player-components/player-time-off-requests/time-off-requests.component";
import {AddTimeOffRequestComponent} from "./features/components/player-components/add-time-off-request/add-time-off-request.component";
import {
  CoachTimeOffRequestsComponent
} from "./features/components/coach-components/coach-time-off-requests/coach-time-off-requests.component";
import {
  CoachTrainingsComponent
} from "./features/components/coach-components/coach-trainings/coach-trainings.component";
import {
  PlayerTrainingsComponent
} from "./features/components/player-components/player-trainings/player-trainings.component";

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
    path: 'player-time-off-request',
    component: PlayerTimeOffRequestsComponent,
    canActivate: [PlayerGuard, AuthGuardServiceGuard]
  },
  {
    path: 'coach-time-off-request',
    component: CoachTimeOffRequestsComponent,
    canActivate: [CoachGuard, AuthGuardServiceGuard]
  },
  {
    path: 'time-off-request',
    component: AddTimeOffRequestComponent,
    canActivate: [PlayerGuard, AuthGuardServiceGuard]
  },
  {
    path: 'player-trainings',
    component: PlayerTrainingsComponent,
    canActivate: [PlayerGuard, AuthGuardServiceGuard]
  },
  {
    path: 'coach-trainings',
    component: CoachTrainingsComponent,
    canActivate: [CoachGuard, AuthGuardServiceGuard]
  },

  {
    path: 'teams-management',
    component: TeamManagementComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
  },
  {
    path: 'users-management',
    component: UserManagementComponent,
    canActivate: [AdminGuard, AuthGuardServiceGuard]
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
