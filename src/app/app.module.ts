import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
// Services
import { MobileService } from './services/mobile.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'edit-data', component: EditDataComponent },
  { path: 'add-data', component: AddDataComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AddDataComponent,
    EditDataComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // temporary
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MobileService,
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
