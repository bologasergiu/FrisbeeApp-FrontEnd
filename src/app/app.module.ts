import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { RegisterFormComponent } from './features/components/register-form/register-form.component';
import { RegisterPageComponent } from './features/pages/register-page/register-page.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { LoginPageComponent } from './features/pages/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { SnackBarComponent } from './features/components/snack-bar/snack-bar.component';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule, HTTP_INTERCEPTORS}  from "@angular/common/http";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginFormComponent } from './features/components/login-form/login-form.component';
import { AddTeamComponent } from './features/components/admin-components/add-team/add-team.component';
import {JwtInterceptor} from "./core/guards/jwt.interceptor";
import { AdminPageComponent } from './features/pages/admin-page/admin-page.component';
import {JwtModule} from "@auth0/angular-jwt";
import { PlayerPageComponent } from './features/pages/player-page/player-page.component';
import { CoachPageComponent } from './features/pages/coach-page/coach-page.component';
import { DeleteUserComponent } from './features/components/admin-components/delete-user/delete-user.component';
import { UserDetailsComponent } from './core/components/user-details/user-details.component';
import { TeamsListComponent } from './features/components/admin-components/teams-list/teams-list.component';
import { TeamManagementComponent } from './core/components/team-management/team-management.component';
import { ConfirmationDialogComponent } from './core/utils/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { UserManagementComponent } from './core/components/user-management/user-management.component';
import { UsersListComponent } from './features/components/admin-components/users-list/users-list.component';
import {MatTableModule} from "@angular/material/table";
import { DeleteuserDialogComponent } from './core/utils/deleteuser-dialog/deleteuser-dialog.component';
import { EditUserComponent } from './core/components/edit-user/edit-user.component';
import { AddTimeOffRequestComponent } from './features/components/player-components/add-time-off-request/add-time-off-request.component';
import {PlayerTimeOffRequestsComponent} from './features/components/player-components/player-time-off-requests/time-off-requests.component';
import { ChangePasswordComponent } from './core/components/change-password/change-password.component';
import { TimeOffRequestListComponent } from './features/components/coach-components/time-off-request-list/time-off-request-list.component';
import { CoachTimeOffRequestsComponent } from './features/components/coach-components/coach-time-off-requests/coach-time-off-requests.component';
import { SearchFilterPipe } from './core/pipes/search-filter.pipe';
import {CdkDragPlaceholder} from "@angular/cdk/drag-drop";
import { CoachTrainingsComponent } from './features/components/coach-components/coach-trainings/coach-trainings.component';
import { AddTrainingComponent } from './features/components/coach-components/add-training/add-training.component';
import { PlayerTrainingsComponent } from './features/components/player-components/player-trainings/player-trainings.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { TrainingsTableComponent } from './features/components/coach-components/trainings-table/trainings-table.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    LoginPageComponent,
    SnackBarComponent,
    LoginFormComponent,
    AddTeamComponent,
    AdminPageComponent,
    PlayerPageComponent,
    CoachPageComponent,
    DeleteUserComponent,
    UserDetailsComponent,
    TeamsListComponent,
    TeamManagementComponent,
    ConfirmationDialogComponent,
    UserManagementComponent,
    UsersListComponent,
    DeleteuserDialogComponent,
    EditUserComponent,
    AddTimeOffRequestComponent,
    PlayerTimeOffRequestsComponent,
    ChangePasswordComponent,
    TimeOffRequestListComponent,
    CoachTimeOffRequestsComponent,
    SearchFilterPipe,
    CoachTrainingsComponent,
    AddTrainingComponent,
    PlayerTrainingsComponent,
    TrainingsTableComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost:4200"],
            },
        }),
        MatTableModule,
        FormsModule,
        CdkDragPlaceholder,
        MatAutocompleteModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
