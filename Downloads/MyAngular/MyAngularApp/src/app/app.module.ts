import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreateEmployee } from './Employees/create-employee.component';
import { ListEmployeeComponent } from './Employees/list-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmployee } from './Employees/employee-update.component';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeeComponent },
  { path: 'create', component: CreateEmployee },
  { path: 'edit/:id', component: UpdateEmployee },
  { path: '', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployee,
    UpdateEmployee,
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
