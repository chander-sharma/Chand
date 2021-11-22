import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateEmployee } from './Employees/create-employee.component';
import { ListEmployeeComponent } from './Employees/list-employee.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeeComponent },
  { path: 'create', component: CreateEmployee },
  { path: '', redirectTo: '/create', pathMatch: 'full' }
  { path: 'edit', component: EmployeeUpdate },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployee,
    ListEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
