import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployee {

  emp: Employee = new Employee();

  submit(newemployee: Employee): void {

    console.log(newemployee);

    //localStorage.setItem('dataSource', this.login.length);
    //console.log(localStorage.getItem('dataSource'));
  }

}
  
