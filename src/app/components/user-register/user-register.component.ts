import { Component, OnInit } from '@angular/core';

interface User{
  name: string;
  eamil:string;
  password:string;
  designation : string;
  about : string;
  terms : boolean;

}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  public user:User = {
    name : '',
    eamil : 'test@gamil.com',
    password : '',
    designation : '',
    about : '',
    terms : true
  }
  constructor() { }

  ngOnInit(): void {
  }

  public submitRegister(){
    console.log(this.user);
  }

}
