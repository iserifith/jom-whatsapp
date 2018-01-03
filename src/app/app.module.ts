import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { MobileService } from './services/mobile.service';
import { AddDataComponent } from './components/add-data/add-data.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'edit-data', component: EditDataComponent },
  { path: 'add-data', component: AddDataComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AddDataComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
