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
import {ReactiveFormsModule} from "@angular/forms";
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
import { TeamManagementComponent } from './features/components/admin-components/team-management/team-management.component';

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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:4200"],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
