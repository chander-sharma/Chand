import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'update-employee',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class UpdateEmployee implements OnInit {

  emp: Employee;

  constructor(private route: ActivatedRoute) {
    this.emp = new Employee();
    this.route.params.subscribe((res)=> {
      this.emp.empid = res['id']
    });
  }

  ngOnInit(): void {

    const oldrecords = localStorage.getItem('employeelist');
    if (oldrecords !== null) {
      const employeelist = JSON.parse(oldrecords);
      const currentemp = employeelist.find((m: any) => m.empid == this.emp.empid);
      if (currentemp !== undefined) {
        this.emp.FirstName = currentemp.FirstName;
        this.emp.Surname = currentemp.Surname;
        this.emp.Gender = currentemp.Gender;
        this.emp.Email = currentemp.Email;
        this.emp.Password = currentemp.Password;
        this.emp.Mobile = currentemp.Mobile;
        this.emp.DOB = currentemp.DOB;
        this.emp.Country = currentemp.Country;
      }
    }
  }

  updateUser() {
    const record = localStorage.getItem('employeelist');
    if (record !== null) {
      const employeelist = JSON.parse(record);

      employeelist.slice(employeelist.findIndex((a: any)=>a.empid == this.emp.empid), 1);

      employeelist.push(this.emp);
      localStorage.setItem('employeelist', JSON.stringify(employeelist));
    }
  }

}

