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
import {HttpClientModule}  from "@angular/common/http";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginFormComponent } from './features/components/login-form/login-form.component';
import {ViewDataPageComponent} from "./features/pages/view-data-page/view-data-page.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    LoginPageComponent,
    SnackBarComponent,
    LoginFormComponent,
    ViewDataPageComponent
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
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
