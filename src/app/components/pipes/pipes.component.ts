import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from '../../models/Employee';

// interface Employee{
//   sno : string,
//   name : string;
//   age : number;
//   designation : string;
//   doj : Date,
//   salary : number;
// }

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  // public employee:Employee = {
  //   sno : "aa101",
  //   name : 'john',
  //   age : 35,
  //   designation : 'Tech Lead',
  //   doj : new Date(),
  //   salary : 45000
  // }

  public employee:Employee = {} as Employee;

  //constructor() { }
  constructor(private employeeService : EmployeeService) { }

  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    this.employee = this.employeeService.getEmployee();
  }

}
