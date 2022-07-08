import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users:User[] = [] as User[];

  constructor(private userSerive:UserService) { }

  ngOnInit(): void {
    // this.userSerive.getUsers().subscribe( (data: User[])=> {
    //   this.users =data;
    // });
  }

  public getUsersList(){
    this.userSerive.getUsers().subscribe( (data: User[])=> {
      this.users =data;
    });
  }
  

}
