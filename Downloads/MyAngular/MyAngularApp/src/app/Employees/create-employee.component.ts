import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployee implements OnInit {

  emp: Employee;

  constructor() {
    this.emp = new Employee();

  }

  ngOnInit(): void {

  }

  getNewEmpId() {
    const oldrecords = localStorage.getItem('employeelist');
    if (oldrecords !== null) {
      const employeelist = JSON.parse(oldrecords);
      return employeelist.length + 1;
    }
    else {
      return 1;
    }
  }

  submit() {
    const latestId = this.getNewEmpId();
    this.emp.empid = latestId;
    const record = localStorage.getItem('employeelist');
    if (record !== null) {
      const employeelist = JSON.parse(record);
      employeelist.push(this.emp);
      localStorage.setItem('employeelist', JSON.stringify(employeelist));
    }
    else {
      const empArr = [];
      empArr.push(this.emp);
      localStorage.setItem('employeelist', JSON.stringify(empArr));
    }
  }

}
  
