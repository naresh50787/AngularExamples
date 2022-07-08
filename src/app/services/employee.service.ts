import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee:Employee = {
    sno : "AA101",
    name : 'john',
    age : 35,
    designation : 'Tech Lead',
    doj : new Date(),
    salary : 45000
  }

  constructor() { }

  public getEmployee():Employee{
    return this.employee;
  }
}
